import logoWhite from "@/assets/brand/logo-white.webp";
import logoNavy from "@/assets/brand/logo-navy.webp";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark"; // light = white logo for dark backgrounds, dark = navy logo for light backgrounds
  className?: string;
}

const Logo = ({ variant = "light", className }: LogoProps) => {
  return (
    <a href="/" aria-label="Victory Springs Realty Group home" className="inline-flex shrink-0">
      <img
        src={variant === "light" ? logoWhite : logoNavy}
        alt="Victory Springs Realty Group"
        width={800}
        height={256}
        className={cn("h-10 w-auto transition-opacity", className)}
      />
    </a>
  );
};

export default Logo;
