import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  loadPlacesLibrary,
  parseAddressComponents,
  type ParsedAddress,
} from "@/lib/googleMaps";

interface AddressAutocompleteProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onAddressSelect?: (address: ParsedAddress) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  disabled?: boolean;
}

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 250;

// Bias suggestions toward Dallas-Fort Worth (50km is the maximum bias radius)
const DFW_LOCATION_BIAS = {
  center: { lat: 32.8206, lng: -97.0115 },
  radius: 50000,
};

/**
 * Address input with Google Places (New) suggestions.
 * Works as a plain text input whenever Google is unavailable, so a typed
 * address is never lost.
 */
const AddressAutocomplete = ({
  id,
  name,
  value,
  onChange,
  onAddressSelect,
  placeholder,
  className,
  inputClassName,
  required,
  disabled,
}: AddressAutocompleteProps) => {
  const [suggestions, setSuggestions] = useState<
    google.maps.places.PlacePrediction[]
  >([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const placesRef = useRef<google.maps.PlacesLibrary | null>(null);
  const sessionTokenRef =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const requestIdRef = useRef(0);
  const unavailableRef = useRef(false);
  const listboxId = useId();

  useEffect(() => {
    loadPlacesLibrary()
      .then((places) => {
        placesRef.current = places;
      })
      .catch((err) => {
        unavailableRef.current = true;
        console.warn("Address suggestions unavailable:", err);
      });

    return () => clearTimeout(debounceRef.current);
  }, []);

  const closeSuggestions = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const fetchSuggestions = async (input: string) => {
    const places = placesRef.current;
    if (!places || unavailableRef.current) return;

    if (!sessionTokenRef.current) {
      sessionTokenRef.current = new places.AutocompleteSessionToken();
    }

    const requestId = ++requestIdRef.current;

    try {
      const { suggestions: results } =
        await places.AutocompleteSuggestion.fetchAutocompleteSuggestions({
          input,
          includedRegionCodes: ["us"],
          locationBias: DFW_LOCATION_BIAS,
          sessionToken: sessionTokenRef.current,
        });

      // Ignore responses that arrive after a newer request
      if (requestId !== requestIdRef.current) return;

      const predictions = results
        .map((s) => s.placePrediction)
        .filter((p): p is google.maps.places.PlacePrediction => Boolean(p));

      setSuggestions(predictions);
      setActiveIndex(-1);
      setIsOpen(predictions.length > 0);
    } catch (err) {
      // e.g. billing disabled or key restricted: stop calling Google, keep plain input
      unavailableRef.current = true;
      closeSuggestions();
      console.warn("Address suggestions unavailable:", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    onChange(next);

    clearTimeout(debounceRef.current);
    if (next.trim().length < MIN_QUERY_LENGTH) {
      requestIdRef.current++;
      closeSuggestions();
      return;
    }
    debounceRef.current = setTimeout(() => fetchSuggestions(next), DEBOUNCE_MS);
  };

  const selectSuggestion = async (
    prediction: google.maps.places.PlacePrediction
  ) => {
    clearTimeout(debounceRef.current);
    requestIdRef.current++;
    closeSuggestions();
    onChange(prediction.text.text);

    try {
      const place = prediction.toPlace();
      // Only Essentials-tier fields, to keep Place Details at the lowest price
      await place.fetchFields({
        fields: ["addressComponents", "formattedAddress"],
      });
      const address = parseAddressComponents(place);
      onChange(address.street || address.formatted);
      onAddressSelect?.(address);
    } catch (err) {
      console.warn("Could not fetch address details:", err);
    } finally {
      // fetchFields ends the billing session; the next search starts a new one
      sessionTokenRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      closeSuggestions();
    }
  };

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={closeSuggestions}
        placeholder={placeholder}
        className={inputClassName}
        required={required}
        disabled={disabled}
        autoComplete="off"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={
          activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined
        }
      />

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-md border border-border bg-background text-left shadow-lg">
          <ul id={listboxId} role="listbox">
            {suggestions.map((prediction, index) => (
              <li
                key={prediction.placeId}
                id={`${listboxId}-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                // mousedown fires before the input's blur closes the list
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectSuggestion(prediction);
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  "cursor-pointer px-4 py-3 text-sm text-foreground",
                  index === activeIndex && "bg-muted"
                )}
              >
                <span className="font-medium">
                  {prediction.mainText?.text ?? prediction.text.text}
                </span>
                {prediction.secondaryText && (
                  <span className="ml-1 text-muted-foreground">
                    {prediction.secondaryText.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="border-t border-border px-4 py-1.5 text-right text-xs text-muted-foreground">
            powered by Google
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressAutocomplete;
