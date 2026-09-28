import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let optionsSet = false;
let placesLibrary: Promise<google.maps.PlacesLibrary> | null = null;

export const hasGoogleMapsKey = Boolean(GOOGLE_MAPS_API_KEY);

/**
 * Loads the Places library once and shares it across components.
 * Requires "Maps JavaScript API" and "Places API (New)" enabled on the key's project.
 */
export const loadPlacesLibrary = (): Promise<google.maps.PlacesLibrary> => {
  if (!hasGoogleMapsKey) {
    return Promise.reject(new Error("VITE_GOOGLE_MAPS_API_KEY is not set"));
  }

  if (!optionsSet) {
    // The loader only accepts options once per page
    setOptions({ key: GOOGLE_MAPS_API_KEY, v: "weekly" });
    optionsSet = true;
  }

  if (!placesLibrary) {
    placesLibrary = importLibrary("places").catch((err) => {
      // Allow a later retry instead of caching the failure
      placesLibrary = null;
      throw err;
    });
  }

  return placesLibrary;
};

export interface ParsedAddress {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  formattedAddress: string;
}

export const parsePlaceAddress = (place: google.maps.places.Place): ParsedAddress => {
  let streetNumber = "";
  let route = "";
  let city = "";
  let state = "";
  let zip = "";

  (place.addressComponents ?? []).forEach((component) => {
    const types = component.types;

    if (types.includes("street_number")) {
      streetNumber = component.longText ?? "";
    }
    if (types.includes("route")) {
      route = component.longText ?? "";
    }
    if (types.includes("locality") || (!city && types.includes("sublocality"))) {
      city = component.longText ?? "";
    }
    if (types.includes("administrative_area_level_1")) {
      state = component.shortText ?? "";
    }
    if (types.includes("postal_code")) {
      zip = component.longText ?? "";
    }
  });

  return {
    streetAddress: streetNumber ? `${streetNumber} ${route}` : route,
    city,
    state,
    zip,
    formattedAddress: place.formattedAddress ?? "",
  };
};
