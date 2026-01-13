export const PHONE_NUMBER = "(972) 211-0909";
export const PHONE_TEL = "tel:9722110909";
export const EMAIL = "info@victoryspringsrealty.com";

export const serviceAreas = [
  "Dallas",
  "Plano",
  "Frisco",
  "McKinney",
  "Arlington",
  "Fort Worth",
  "Irving",
  "Garland",
  "Richardson",
  "Carrollton",
];

export interface ParsedAddress {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

/**
 * Parse a formatted address string into components
 * Handles formats like:
 * - "123 Main St, City, ST 12345"
 * - "123 Main St, City, ST 12345, USA"
 * - "City, ST 12345"
 * - "123 Main St, City"
 */
export const parseAddressString = (address: string): ParsedAddress => {
  const result: ParsedAddress = {
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  };

  if (!address) return result;

  // Remove country suffix if present
  const cleanedAddress = address.replace(/,?\s*(USA|United States|US)$/i, "").trim();

  // Split by comma and trim each part
  const parts = cleanedAddress.split(",").map((p) => p.trim());

  if (parts.length >= 3) {
    // Format: "Street, City, State ZIP" or "Street, Street2, City, State ZIP"
    const lastPart = parts[parts.length - 1]; // "TX 75001" or just "TX"
    const cityPart = parts[parts.length - 2]; // "Dallas"
    const streetParts = parts.slice(0, -2); // Everything before city

    result.streetAddress = streetParts.join(", ");
    result.city = cityPart;

    // Parse state and zip from last part (e.g., "TX 75001" or "TX")
    const stateZipMatch = lastPart.match(/^([A-Z]{2})\s*(\d{5}(?:-\d{4})?)?$/i);
    if (stateZipMatch) {
      result.state = stateZipMatch[1].toUpperCase();
      result.zip = stateZipMatch[2] || "";
    } else {
      // Maybe just state or just zip
      const zipOnly = lastPart.match(/^(\d{5}(?:-\d{4})?)$/);
      const stateOnly = lastPart.match(/^([A-Z]{2})$/i);
      if (zipOnly) {
        result.zip = zipOnly[1];
      } else if (stateOnly) {
        result.state = stateOnly[1].toUpperCase();
      } else {
        // Fallback: treat as state
        result.state = lastPart;
      }
    }
  } else if (parts.length === 2) {
    // Format: "Street, City" or "City, State ZIP"
    const lastPart = parts[1];
    const stateZipMatch = lastPart.match(/^([A-Z]{2})\s*(\d{5}(?:-\d{4})?)?$/i);

    if (stateZipMatch) {
      // "City, State ZIP" format
      result.city = parts[0];
      result.state = stateZipMatch[1].toUpperCase();
      result.zip = stateZipMatch[2] || "";
    } else {
      // "Street, City" format
      result.streetAddress = parts[0];
      result.city = lastPart;
    }
  } else if (parts.length === 1) {
    // Just a street address or single value
    result.streetAddress = parts[0];
  }

  return result;
};
