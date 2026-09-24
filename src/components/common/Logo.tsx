import logoWhite from "@/assets/brand/logo-white.webp";
import logoNavy from "@/assets/brand/logo-navy.webp";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark"; // light = white logo for dark backgrounds, dark = navy logo for light backgrounds
  className?: string;
}

const Logo = ({ variant = "light", className }: LogoProps) => {
  return (
    <Link to="/" aria-label="Victory Springs Realty Group home" className="inline-flex shrink-0">
      <img
        src={variant === "light" ? logoWhite : logoNavy}
        alt="Victory Springs Realty Group"
        width={800}
        height={273}
        className={cn("h-10 w-auto transition-opacity", className)}
      />
    </Link>
  );
};

export default Logo;
