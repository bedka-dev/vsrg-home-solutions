import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const Comparison = () => {
  const comparisonData = [
    {
      feature: "Commission Fees",
      us: { value: "$0", positive: true },
      agent: { value: "5-6%", positive: false },
    },
    {
      feature: "Closing Costs",
      us: { value: "Covered", positive: true },
      agent: { value: "Your expense", positive: false },
    },
    {
      feature: "Property Repairs",
      us: { value: "As-is", positive: true },
      agent: { value: "Required", positive: false },
    },
    {
      feature: "Time to Complete",
      us: { value: "7-14 days", positive: true },
      agent: { value: "60-90+ days", positive: false },
    },
    {
      feature: "Showings Required",
      us: { value: "None", positive: true },
      agent: { value: "Multiple", positive: false },
    },
    {
      feature: "Appraisal Process",
      us: { value: "Not needed", positive: true },
      agent: { value: "Mandatory", positive: false },
    },
    {
      feature: "Deal Risk",
      us: { value: "Zero risk", positive: true },
      agent: { value: "15%+ fall through", positive: false },
    },
    {
      feature: "Closing Flexibility",
      us: { value: "Flexible - you pick the date", positive: true },
      agent: { value: "Rigid - lender sets timeline", positive: false },
    },
  ];

  return (
    <section className="py-10 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground">
            See how we compare to traditional real estate agents
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Feature</h3>
              </div>
              <div className="p-6 bg-secondary text-secondary-foreground">
                <h3 className="text-xl font-semibold">Direct Cash Buyer</h3>
                <p className="text-sm opacity-90">Fast, simple, guaranteed</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Traditional Agent</h3>
                <p className="text-sm opacity-90">Standard market listing</p>
              </div>
            </div>

            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 ${
                  index % 2 === 0 ? "bg-background" : "bg-muted"
                }`}
              >
                <div className="p-6 font-medium text-foreground border-b md:border-b-0 md:border-r border-border">
                  {item.feature}
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-r border-border bg-accent/30">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item.us.value}</span>
                  </div>
                </div>
                <div className="p-6 border-b md:border-b-0 border-border">
                  <div className="flex items-center gap-2">
                    <X className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item.agent.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <div className="text-center mt-12">
            <p className="text-xl text-foreground mb-2 font-medium">
              When you know, you know. Ready?
            </p>
            <p className="text-lg text-muted-foreground">
              Just reach out for an honest conversation with a family who understands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
