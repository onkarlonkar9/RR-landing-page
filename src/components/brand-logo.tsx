import logo from "@/assets/rr-enterprises-logo.png";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt="RR Enterprises"
      className={cn("h-16 w-auto rounded-sm object-contain sm:h-20", className)}
    />
  );
}
