import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import { ArrowRight } from "lucide-react";

interface AddressCTAProps {
  placeholder?: string;
  buttonText?: string;
}

interface PlaceResult {
  formatted_address?: string;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const AddressCTA = ({
  placeholder = "Enter Your Property Address",
  buttonText = "GET MY OFFER",
}: AddressCTAProps) => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleAddressSelect = (place: PlaceResult) => {
    if (place.formatted_address) {
      setAddress(place.formatted_address);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      const encodedAddress = encodeURIComponent(address.trim());
      navigate(`/contact?address=${encodedAddress}`);
    } else {
      navigate("/contact");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-full overflow-hidden shadow-lg">
        <Autocomplete
          apiKey={GOOGLE_MAPS_API_KEY}
          onPlaceSelected={handleAddressSelect}
          options={{
            types: ["address"],
            componentRestrictions: { country: "us" },
          }}
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-6 py-4 sm:py-5 text-lg text-foreground placeholder:text-muted-foreground outline-none border-none bg-transparent min-h-[56px]"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-4 sm:py-5 text-lg font-bold text-white transition-all hover:opacity-90 min-h-[56px]"
          style={{ backgroundColor: "#2E8CB8" }}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default AddressCTA;
