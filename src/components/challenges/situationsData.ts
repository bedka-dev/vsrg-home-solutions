import { AlertCircle, Home, Heart, Truck, Wrench, LucideIcon } from "lucide-react";

// Import the images
import foreclosureImg from "@/assets/challenges/foreclosure.jpg";
import inheritedImg from "@/assets/challenges/inherited.jpg";
import relocateImg from "@/assets/challenges/relocate.jpg";
import divorceImg from "@/assets/challenges/divorce-meeting.jpg";

export interface Situation {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  image: string | null;
  imageAlt: string;
  subtitle: string;
  fullTitle: string;
  stat: string;
  challenge: string;
  solution: string[];
  cta: string;
}

export const situations: Situation[] = [
  {
    id: "foreclosure",
    icon: AlertCircle,
    title: "Facing Foreclosure?",
    shortDescription: "Looming auction dates and potential credit damage can be...",
    image: foreclosureImg,
    imageAlt: "Family stressed about foreclosure",
    subtitle: "Stop Foreclosure — We Can Help",
    fullTitle: "Facing Foreclosure or Pre-Foreclosure",
    stat: "39% of DFW families are at risk of losing their home",
    challenge: `In the Dallas-Fort Worth area, one in four homeowners is behind on mortgage payments. If you're facing foreclosure, every day counts. A foreclosure doesn't just affect your credit score—it can impact your ability to rent, buy, or finance for years to come. The process is stressful, costly, and can feel impossible to stop once it starts.`,
    solution: [
      "We can close quickly—often before the foreclosure sale date",
      "Our cash offer may help you avoid a foreclosure on your permanent record",
      "You walk away with cash instead of losing everything",
      "We handle all paperwork and work directly with your lender if needed",
      "No waiting for buyer financing or inspections"
    ],
    cta: "Get Help Now — Request Your Cash Offer",
  },
  {
    id: "inherited",
    icon: Home,
    title: "Inherited a Property?",
    shortDescription: "Unexpected taxes, maintenance, and family disagreements can tu...",
    image: inheritedImg,
    imageAlt: "Family dealing with inherited property complexity",
    subtitle: "Inherited a House You Don't Want?",
    fullTitle: "Inherited Property",
    stat: "Managing an inherited home adds stress during an already difficult time",
    challenge: `Inheriting property can be overwhelming—especially if you live out of state, the home needs repairs, or multiple heirs are involved. Probate delays, estate taxes, and maintenance costs can drain resources fast. You may feel obligated to keep a property you didn't choose, in a location far from where you live.`,
    solution: [
      "We buy inherited houses in any condition—no repairs needed",
      "No need to clean out belongings, stage, or maintain the property",
      "We work directly with multiple heirs, executors, and attorneys",
      "Fast closing lets you settle the estate and move forward",
      "We handle all details so you can focus on what matters"
    ],
    cta: "Sell Your Inherited Property — Get Your Offer",
  },
  {
    id: "divorce",
    icon: Heart,
    title: "Going Through Divorce?",
    shortDescription: "Separating assets shouldn't add to the emotional toll. We offer a...",
    image: divorceImg,
    imageAlt: "Professional meeting about divorce settlement",
    subtitle: "Simplify Your Divorce Settlement",
    fullTitle: "Going Through a Divorce",
    stat: "Home sale disputes complicate 60% of divorce proceedings",
    challenge: `Divorce is already stressful without the added complexity of selling a shared home. You may disagree on repairs, pricing, or timeline. Traditional sales take 60-90 days, extending the emotional and financial burden. Meanwhile, both parties are tied to the property, and every decision requires agreement from someone you may not want to negotiate with.`,
    solution: [
      "Fast, fair cash offers so you can divide assets and move forward",
      "We work with both parties and attorneys—no need to agree on everything",
      "No disputes over repairs, staging, or listing price",
      "Close in 7-14 days instead of waiting months",
      "Stop being tied to a shared property during proceedings"
    ],
    cta: "Simplify Your Divorce — Get Your Cash Offer",
  },
  {
    id: "relocate",
    icon: Truck,
    title: "Relocating Quickly?",
    shortDescription: "New job or lifestyle change? Don't let an unsold house hold you back.",
    image: relocateImg,
    imageAlt: "Man excited about quick relocation",
    subtitle: "Relocating for Work or Family?",
    fullTitle: "Need to Relocate Quickly",
    stat: "DFW's rapidly growing job market means relocation is common",
    challenge: `Whether it's a job transfer, military deployment, or a family emergency, sometimes you need to move fast. Traditional real estate takes 60-90+ days. You can't wait that long—you need to sell now. Most buyers need financing and inspections, which adds weeks or months to the process.`,
    solution: [
      "Close in as few as 7 days—not months",
      "No waiting for buyer financing or appraisals",
      "Sell as-is—no repairs, cleaning, or preparation needed",
      "Flexible closing dates that match your move timeline",
      "Certainty instead of hoping a buyer's financing falls through"
    ],
    cta: "Relocate Without the Stress — Get Your Offer",
  },
  {
    id: "repairs",
    icon: Wrench,
    title: "House Needs Major Repairs?",
    shortDescription: "Foundation issues, water damage, or outdated systems? We buy as...",
    image: null,
    imageAlt: "",
    subtitle: "Selling a Home That Needs Work",
    fullTitle: "House Needs Major Repairs?",
    stat: "Repairs can cost thousands and take months to complete",
    challenge: `Whether it's foundation issues, roof damage, electrical problems, or outdated systems, major repairs can be a nightmare. Getting estimates is expensive, contractors take forever, and you still need to find a buyer who will accept a fixer-upper. Meanwhile, you're paying property taxes and insurance on a home you can't sell.`,
    solution: [
      "We buy homes in any condition—no repairs needed",
      "No need for expensive inspections or contractor estimates",
      "We handle all repairs and renovations after closing",
      "Sell as-is and move on without the hassle",
      "Fast, fair offers even with significant issues"
    ],
    cta: "Sell As-Is — Get Your Offer",
  },
  {
    id: "landlord",
    icon: AlertCircle,
    title: "Tired Landlord?",
    shortDescription: "Bad tenants, late rent, and constant calls? Cash out your...",
    image: null,
    imageAlt: "",
    subtitle: "Landlord Burnout? We Can Help",
    fullTitle: "Tired Landlord?",
    stat: "Property management stress affects 40% of landlords",
    challenge: `Being a landlord sounds passive, but it's anything but. Bad tenants, late payments, emergency repairs at 2 AM, eviction processes, and constant headaches drain your time and energy. You're trapped with a property that's more trouble than it's worth, but selling traditionally means dealing with tenant issues and a slow sale process.`,
    solution: [
      "We buy rental properties—tenant issues are our problem now",
      "Fast closing means you're out of the landlord business quickly",
      "No need to worry about evictions or tenant disputes",
      "We handle everything including tenant relocation",
      "Fair offers even with problem tenants or delinquent rent"
    ],
    cta: "Exit Landlord Life — Get Your Offer",
  },
];
