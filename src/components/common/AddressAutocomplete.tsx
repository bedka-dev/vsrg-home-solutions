import { useEffect, useRef, useState } from "react";
import {
  hasGoogleMapsKey,
  loadPlacesLibrary,
  parsePlaceAddress,
  type ParsedAddress,
} from "@/lib/googleMaps";

interface AddressAutocompleteProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect?: (address: ParsedAddress) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  /** Classes for the fallback input; Google's element brings its own styling */
  className?: string;
}

/**
 * Address input backed by Google's PlaceAutocompleteElement (Places API New).
 * Falls back to a plain text input when no API key is set or Google fails to load,
 * so the form keeps working either way.
 */
const AddressAutocomplete = ({
  id,
  name,
  value,
  onChange,
  onPlaceSelect,
  placeholder,
  disabled = false,
  required = false,
  className,
}: AddressAutocompleteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<google.maps.places.PlaceAutocompleteElement | null>(null);
  const [useFallback, setUseFallback] = useState(!hasGoogleMapsKey);

  // Keep latest callbacks without re-creating the Google element
  const onChangeRef = useRef(onChange);
  const onPlaceSelectRef = useRef(onPlaceSelect);
  const valueRef = useRef(value);
  const disabledRef = useRef(disabled);
  onChangeRef.current = onChange;
  onPlaceSelectRef.current = onPlaceSelect;
  valueRef.current = value;
  disabledRef.current = disabled;

  useEffect(() => {
    if (useFallback) return;

    let cancelled = false;
    let element: google.maps.places.PlaceAutocompleteElement | null = null;

    const handleInput = () => {
      if (element) onChangeRef.current(element.value);
    };

    const handleSelect = async (event: google.maps.places.PlacePredictionSelectEvent) => {
      try {
        const place = event.placePrediction.toPlace();
        await place.fetchFields({ fields: ["addressComponents", "formattedAddress"] });
        onPlaceSelectRef.current?.(parsePlaceAddress(place));
      } catch (err) {
        console.error("Failed to fetch place details:", err);
      }
    };

    const handleError = (event: Event) => {
      console.error("Google Places autocomplete error:", event);
    };

    loadPlacesLibrary()
      .then(({ PlaceAutocompleteElement }) => {
        if (cancelled || !containerRef.current) return;

        element = new PlaceAutocompleteElement({
          includedRegionCodes: ["us"],
          includedPrimaryTypes: ["street_address", "premise", "subpremise"],
        });
        element.id = id ?? "";
        element.className = "gmp-address-autocomplete";
        if (name) element.name = name;
        if (placeholder) element.placeholder = placeholder;
        element.value = valueRef.current;
        element.disabled = disabledRef.current;

        element.addEventListener("input", handleInput);
        element.addEventListener("gmp-select", handleSelect);
        element.addEventListener("gmp-error", handleError);

        containerRef.current.appendChild(element);
        elementRef.current = element;
      })
      .catch((err) => {
        console.error("Google Maps failed to load, using plain address input:", err);
        if (!cancelled) setUseFallback(true);
      });

    return () => {
      cancelled = true;
      if (element) {
        element.removeEventListener("input", handleInput);
        element.removeEventListener("gmp-select", handleSelect);
        element.removeEventListener("gmp-error", handleError);
        element.remove();
      }
      elementRef.current = null;
    };
    // Element is created once; value/disabled are synced by the effects below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useFallback]);

  // Sync external value changes (e.g. prefilled address, street-only after selection)
  useEffect(() => {
    const element = elementRef.current;
    if (element && element.value !== value) {
      element.value = value;
    }
  }, [value]);

  useEffect(() => {
    if (elementRef.current) elementRef.current.disabled = disabled;
  }, [disabled]);

  if (useFallback) {
    return (
      <input
        id={id}
        name={name}
        type="text"
        autoComplete="street-address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={className}
      />
    );
  }

  return <div ref={containerRef} className="w-full" />;
};

export default AddressAutocomplete;
