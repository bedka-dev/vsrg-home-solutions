import { Building, TrendingUp, Stadium, Calendar, Home } from "./Icons";

export interface CityLanding {
  city: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  description: string;
  reasons: string[];
  neighborhoods: string[];
  zipCodes: string[];
  highlight: string;
}

export const dallasSuburbs = [
  "Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson",
  "Garland", "Irving", "Carrollton", "Denton", "Lewisville",
  "Flower Mound", "The Colony", "Mesquite", "Rowlett"
];

export const fortWorthSuburbs = [
  "Fort Worth", "Arlington", "Grand Prairie", "Mansfield", "Bedford",
  "Euless", "Hurst", "Grapevine", "North Richland Hills"
];

export const cityLandings: CityLanding[] = [
  {
    city: "Dallas",
    tagline: "The Heart of North Texas Real Estate",
    icon: Building,
    description: "Dallas is a city of contrasts—from historic Oak Cliff bungalows to modern uptown condos. Whether you're in a gentrifying neighborhood, dealing with an older home that needs work, or simply ready to move on, we buy houses in every Dallas neighborhood.",
    reasons: ["Older home in a changing neighborhood", "Inherited property you can't manage from afar", "Relocating for work or retirement", "Tired of maintaining a large property"],
    neighborhoods: ["Oak Cliff", "Lake Highlands", "East Dallas", "Pleasant Grove", "Oak Lawn"],
    zipCodes: ["75201", "75204", "75214", "75218", "75223"],
    highlight: "Every neighborhood, every condition",
  },
  {
    city: "Plano",
    tagline: "Ready for Your Next Chapter?",
    icon: TrendingUp,
    description: "Plano has transformed from a quiet suburb into one of DFW's most desirable cities. Whether you're an empty nester ready to downsize, relocating for work, or simply ready for a change, we make selling simple.",
    reasons: ["Downsizing after kids move out", "Job relocation or career change", "Rising costs and home values", "Ready to cash out your equity"],
    neighborhoods: ["West Plano", "East Plano", "Legacy", "Downtown Plano"],
    zipCodes: ["75023", "75024", "75025", "75074", "75075"],
    highlight: "Average home equity: $180K+",
  },
  {
    city: "Frisco",
    tagline: "Cashing Out at the Right Time",
    icon: TrendingUp,
    description: "Frisco's explosive growth has created incredible equity for homeowners. If you bought 5-10 years ago, your home may be worth 2-3x what you paid. We help you turn that equity into cash—fast, without the hassle of listing.",
    reasons: ["Capitalize on record-high home values", "Avoid the hassle of a competitive market", "Skip repairs, staging, and open houses", "Close on your timeline, not a buyer's"],
    neighborhoods: ["Stonebriar", "Frisco Square", "Starwood", "Newman Village"],
    zipCodes: ["75033", "75034", "75035"],
    highlight: "Home values up 45% in 5 years",
  },
  {
    city: "Arlington",
    tagline: "Entertainment Capital, Real Solutions",
    icon: Stadium,
    description: "Arlington's neighborhoods range from 1950s ranch homes to modern developments. Many longtime residents are facing the reality of aging homes that need significant work—or life changes that make selling the smart choice.",
    reasons: ["Home built before 1980 needs major updates", "Health issues making stairs or maintenance difficult", "Divorcing and need to split assets quickly", "Relocating for work or retirement"],
    neighborhoods: ["North Arlington", "South Arlington", "East Arlington", "Viridian", "Pantego"],
    zipCodes: ["76001", "76002", "76006", "76010", "76011", "76012"],
    highlight: "Tarrant County's largest city",
  },
  {
    city: "Garland",
    tagline: "Your Home, Your Timeline",
    icon: Calendar,
    description: "Garland's working-class neighborhoods are filled with hardworking families. When you need to sell quickly—whether it's to avoid foreclosure, settle an estate, or simply move on—we provide fair cash offers without the runaround.",
    reasons: ["Behind on mortgage payments", "Inherited property with back taxes owed", "Tired of being a landlord with problem tenants", "Home needs more repairs than it's worth"],
    neighborhoods: ["Firewheel", "Duck Creek", "Eastern Hills", "Downtown Garland", "Rowlett Creek"],
    zipCodes: ["75040", "75041", "75042", "75043", "75044"],
    highlight: "Close in as few as 7 days",
  },
  {
    city: "Richardson",
    tagline: "Serving Richardson Families for Generations",
    icon: Home,
    description: "Richardson's established neighborhoods have been home to generations of families. Whether you're dealing with an inherited property, facing costly repairs on an older home, or ready to retire closer to family, we're here to help.",
    reasons: ["Inherited a family home you can't maintain", "Facing major repairs (foundation, roof, HVAC)", "Retiring and moving closer to grandkids", "Home has become too much to manage alone"],
    neighborhoods: ["Canyon Creek", "Prairie Creek", "Breckinridge", "Heights Park"],
    zipCodes: ["75080", "75081", "75082"],
    highlight: "Many homes built 1960s-1980s",
  },
  {
    city: "Irving",
    tagline: "Life Changes. We Make Selling Easy.",
    icon: Home,
    description: "Irving's diverse neighborhoods have seen decades of families come and go. When life throws you a curveball—divorce, job loss, health issues, or caring for aging parents—the last thing you need is a complicated home sale.",
    reasons: ["Going through a divorce or separation", "Dealing with job loss or financial hardship", "Health issues making homeownership difficult", "Relocating to care for aging parents"],
    neighborhoods: ["Las Colinas", "Valley Ranch", "South Irving", "Northwest Park"],
    zipCodes: ["75038", "75039", "75060", "75061"],
    highlight: "No judgment, just solutions",
  },
];

// City images mapping
export const cityImages: Record<string, string> = {
  Dallas: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=800&q=80",
  Plano: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  Frisco: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  Arlington: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  Garland: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  Richardson: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  Irving: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
};
