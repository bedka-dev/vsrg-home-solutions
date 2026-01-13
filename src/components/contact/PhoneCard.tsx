import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL } from "./contactData";

const PhoneCard = () => {
  return (
    <Card className="p-6 bg-primary text-primary-foreground">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          <Phone className="w-6 h-6 text-secondary-foreground" />
        </div>
        <div>
          <p className="text-sm text-primary-foreground/70">Prefer to talk?</p>
          <a
            href={PHONE_TEL}
            className="text-2xl font-bold hover:text-secondary transition-colors"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
      <p className="text-primary-foreground/80 text-sm">
        Speak directly with a family member, not a call center.
      </p>
    </Card>
  );
};

export default PhoneCard;
