import { useState, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/api";
import {
  Home,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Phone,
  Loader2,
} from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showCard?: boolean;
  initialAddress?: string;
  initialCity?: string;
  initialState?: string;
  initialZip?: string;
  source?: string;
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface PlaceResult {
  formatted_address?: string;
  address_components?: AddressComponent[];
}

const PHONE_NUMBER = "(972) 211-0909";
const PHONE_TEL = "tel:9722110909";
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const ContactForm = ({
  title = "Get My Cash Offer",
  subtitle = "Fill out the form below and we'll contact you within 24 hours",
  showCard = true,
  initialAddress = "",
  initialCity = "",
  initialState = "",
  initialZip = "",
  source = "contact-form",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    property_address: initialAddress,
    property_address_2: "",
    city: initialCity,
    state: initialState,
    zip: initialZip,
    message: "",
    smsOptIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const autocompleteRef = useRef<HTMLInputElement>(null);

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Format based on length
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleAddressSelect = (place: PlaceResult) => {
    if (!place.address_components) return;

    let streetNumber = "";
    let route = "";
    let city = "";
    let state = "";
    let zip = "";

    place.address_components.forEach((component) => {
      const types = component.types;

      if (types.includes("street_number")) {
        streetNumber = component.long_name;
      }
      if (types.includes("route")) {
        route = component.long_name;
      }
      if (types.includes("locality") || types.includes("sublocality")) {
        city = component.long_name;
      }
      if (types.includes("administrative_area_level_1")) {
        state = component.short_name;
      }
      if (types.includes("postal_code")) {
        zip = component.long_name;
      }
    });

    const streetAddress = streetNumber ? `${streetNumber} ${route}` : route;

    setFormData((prev) => ({
      ...prev,
      property_address: streetAddress || place.formatted_address || "",
      city,
      state,
      zip,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let newValue = value;

    // Auto-format phone number
    if (name === "phone") {
      newValue = formatPhoneNumber(value);
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : newValue,
    });

    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitLead({
        full_name: formData.full_name,
        email: formData.email || null,
        phone: formData.phone,
        property_address: formData.property_address,
        property_address_2: formData.property_address_2 || null,
        city: formData.city || null,
        state: formData.state || null,
        zip: formData.zip || null,
        message: formData.message || null,
        sms_opt_in: formData.smsOptIn,
        source,
      });

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = (
    <div className="p-8 text-center">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4">Request Received!</h3>
      <p className="text-muted-foreground mb-6">
        Thank you for reaching out. A member of our team will contact you within
        24 hours with your cash offer.
      </p>
      <div className="flex items-center justify-center gap-2 text-trust-blue">
        <Phone className="w-5 h-5" />
        <span>Or call us now at </span>
        <a href={PHONE_TEL} className="font-semibold hover:underline">
          {PHONE_NUMBER}
        </a>
      </div>
    </div>
  );

  const FormContent = (
    <form onSubmit={handleSubmit} className="p-6 space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="full_name"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Your Name *
        </label>
        <Input
          id="full_name"
          name="full_name"
          type="text"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="John Doe"
          className="min-h-[56px]"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Phone Number *{" "}
          <span className="text-muted-foreground font-normal">
            (fastest way to reach you)
          </span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(972) 123-4567"
          className="min-h-[56px]"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Email{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="min-h-[56px]"
          disabled={isSubmitting}
        />
      </div>

      {/* Property Address with Autocomplete */}
      <div>
        <label
          htmlFor="property_address"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Property Address *
        </label>
        <div className="relative">
          <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
          <Autocomplete
            apiKey={GOOGLE_MAPS_API_KEY}
            onPlaceSelected={handleAddressSelect}
            options={{
              types: ["address"],
              componentRestrictions: { country: "us" },
            }}
            defaultValue={formData.property_address}
            ref={autocompleteRef}
            placeholder="Start typing your address..."
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 min-h-[56px]"
            disabled={isSubmitting}
          />
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Start typing to see address suggestions
        </p>
      </div>

      {/* Property Address 2 */}
      <div>
        <label
          htmlFor="property_address_2"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Address Line 2{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Input
          id="property_address_2"
          name="property_address_2"
          type="text"
          value={formData.property_address_2}
          onChange={handleChange}
          placeholder="Apt, Suite, Unit, etc."
          className="min-h-[56px]"
          disabled={isSubmitting}
        />
      </div>

      {/* City, State, Zip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="col-span-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            City
          </label>
          <Input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Dallas"
            className="min-h-[56px]"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            State
          </label>
          <Input
            id="state"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            placeholder="TX"
            className="min-h-[56px]"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Zip
          </label>
          <Input
            id="zip"
            name="zip"
            type="text"
            value={formData.zip}
            onChange={handleChange}
            placeholder="75001"
            className="min-h-[56px]"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Tell us about your situation{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Any details you'd like to share..."
          className="resize-none"
          disabled={isSubmitting}
        />
      </div>

      {/* SMS Opt-in */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="smsOptIn"
          name="smsOptIn"
          checked={formData.smsOptIn}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary"
          disabled={isSubmitting}
        />
        <label htmlFor="smsOptIn" className="text-sm text-muted-foreground">
          I agree to receive SMS messages from Victory Springs Realty Group.
          Message & data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[56px] px-8 text-lg font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ backgroundColor: "#F5B800", color: "#373128" }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Get My Cash Offer
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Trust Indicators */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4 text-trust-blue" />
          <span>100% Secure</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-trust-blue" />
          <span>24hr Response</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-trust-blue" />
          <span>No Obligation</span>
        </div>
      </div>
    </form>
  );

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {(title || subtitle) && !isSubmitted && (
            <div className="text-center mb-8">
              {title && <h2 className="mb-4">{title}</h2>}
              {subtitle && (
                <p className="text-xl text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}

          {showCard ? (
            <Card className="overflow-hidden shadow-medium">
              {isSubmitted ? SuccessMessage : FormContent}
            </Card>
          ) : isSubmitted ? (
            SuccessMessage
          ) : (
            FormContent
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
