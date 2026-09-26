import { useState } from "react";
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
  const navigate = useNavigate();

  const handleAddressSelect = (place: ParsedAddress) => {
    if (place.formatted) {
      setAddress(place.formatted);
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
      {/* No overflow-hidden here: it would clip the suggestions dropdown */}
      <div className="flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-full shadow-lg">
        <AddressAutocomplete
          value={address}
          onChange={setAddress}
          onAddressSelect={handleAddressSelect}
          placeholder={placeholder}
          className="flex-1"
          inputClassName="w-full px-6 py-4 sm:py-5 text-lg text-foreground placeholder:text-muted-foreground outline-none border-none bg-transparent min-h-[56px]"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-4 sm:py-5 text-lg font-bold text-white transition-all hover:opacity-90 min-h-[56px] rounded-b-xl sm:rounded-bl-none sm:rounded-r-full"
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
