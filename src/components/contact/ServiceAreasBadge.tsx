import { Card } from "@/components/ui/card";
import { serviceAreas } from "./contactData";

const ServiceAreasBadge = () => {
  return (
    <Card className="p-4 bg-muted">
      <p className="text-sm font-medium text-primary mb-3">We buy houses in:</p>
      <div className="flex flex-wrap gap-2">
        {serviceAreas.map((city) => (
          <span
            key={city}
            className="px-3 py-1 text-xs rounded-full bg-background text-foreground"
          >
            {city}
          </span>
        ))}
        <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium">
          + All DFW
        </span>
      </div>
    </Card>
  );
};

export default ServiceAreasBadge;
