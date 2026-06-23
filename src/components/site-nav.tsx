import { Link } from "@tanstack/react-router";

type NavItem = {
  label: string;
  to?: "/" | "/about" | "/solutions" | "/industries" | "/contact";
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

type SiteNavProps = {
  active: string;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
};

export function SiteNav({
  active,
  className = "hidden items-center gap-7 text-sm text-white/90 lg:flex",
  linkClassName = "transition hover:text-gold",
  activeClassName = "border-b-2 border-gold pb-1 font-semibold text-gold",
}: SiteNavProps) {
  return (
    <nav className={className}>
      {navItems.map((item) => {
        const className = `${linkClassName} ${active === item.label ? activeClassName : ""}`;

        return (
          <Link key={item.label} to={item.to} className={className}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
