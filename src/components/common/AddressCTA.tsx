import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AddressAutocomplete from "@/components/common/AddressAutocomplete";
import type { ParsedAddress } from "@/lib/googleMaps";

interface AddressCTAProps {
  placeholder?: string;
  buttonText?: string;
}

const AddressCTA = ({
  placeholder = "Enter Your Property Address",
  buttonText = "GET MY OFFER",
}: AddressCTAProps) => {
  const [address, setAddress] = useState("");
  const inputId = useId();
  const navigate = useNavigate();

  const handleAddressSelect = (place: ParsedAddress) => {
    if (place.formattedAddress) {
      setAddress(place.formattedAddress);
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
        <label htmlFor={inputId} className="sr-only">
          Property address
        </label>
        <div className="flex-1 flex items-center px-2 sm:px-4">
          <AddressAutocomplete
            id={inputId}
            value={address}
            onChange={setAddress}
            onPlaceSelect={handleAddressSelect}
            placeholder={placeholder}
            className="w-full px-4 py-4 sm:py-5 text-lg text-foreground placeholder:text-muted-foreground outline-none border-none bg-transparent min-h-[56px]"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-4 sm:py-5 text-lg font-bold text-white transition-all hover:opacity-90 min-h-[56px]"
          style={{ backgroundColor: "#277AA1" }}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default AddressCTA;
