export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "#bio", key: "about" },
  { label: "Photos", href: "#photo-gallery", key: "photos" },
  { label: "Jokes", href: "#joke-button", key: "jokes" },
  { label: "Fun Facts", href: "#fun-facts", key: "facts" },
];

export const BRAND_NAME = "Tiger";
export const BRAND_TAGLINE = "The Goodest Boy on the Internet 🐾";
export const BRAND_FULL = "Tiger the German Shepherd";