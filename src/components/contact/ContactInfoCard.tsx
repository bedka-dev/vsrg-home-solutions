import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import { EMAIL } from "./contactData";

const ContactInfoCard = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4 text-primary">
        Contact Information
      </h3>
      <div className="space-y-4">
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-3 text-foreground hover:text-trust-blue transition-colors"
        >
          <Mail className="w-5 h-5 text-trust-blue" />
          <span>{EMAIL}</span>
        </a>
        <div className="flex items-start gap-3 text-foreground">
          <MapPin className="w-5 h-5 text-trust-blue flex-shrink-0 mt-0.5" />
          <span>Serving all of DFW Metroplex</span>
        </div>
        <div className="flex items-center gap-3 text-foreground">
          <Clock className="w-5 h-5 text-trust-blue" />
          <span>Mon-Fri 9am-6pm</span>
        </div>
      </div>
    </Card>
  );
};

export default ContactInfoCard;
