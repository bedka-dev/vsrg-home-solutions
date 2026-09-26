// src/lib/googleMaps.ts
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let placesLibrary: Promise<google.maps.PlacesLibrary> | null = null;

/**
 * Loads the Places library (Places API "New") once and shares it across components.
 * Uses Google's recommended async bootstrap loader.
 */
export function loadPlacesLibrary(): Promise<google.maps.PlacesLibrary> {
  if (!GOOGLE_MAPS_API_KEY) {
    return Promise.reject(new Error("VITE_GOOGLE_MAPS_API_KEY is not set"));
  }

  if (!placesLibrary) {
    setOptions({ key: GOOGLE_MAPS_API_KEY, v: "weekly" });
    placesLibrary = importLibrary("places");
  }

  return placesLibrary;
}

export interface ParsedAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  formatted: string;
}

export function parseAddressComponents(
  place: google.maps.places.Place
): ParsedAddress {
  const components = place.addressComponents ?? [];

  const get = (type: string, short = false) => {
    const component = components.find((c) => c.types.includes(type));
    if (!component) return "";
    return (short ? component.shortText : component.longText) ?? "";
  };

  const street = [get("street_number"), get("route")].filter(Boolean).join(" ");

  return {
    street,
    city: get("locality") || get("sublocality") || get("postal_town"),
    state: get("administrative_area_level_1", true),
    zip: get("postal_code"),
    formatted: place.formattedAddress ?? street,
  };
}
