import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { SocialLinks } from "@/constants";

const Header = () => {
  return (
    <header className="flexBetween bg-foreground w-full px-2 py-1 lg:px-4 lg:py-4 xl:px-16 xl:py-3">
      <h2 className="text-accent text-xl font-bold lowercase lg:text-2xl xl:text-4xl">
        <Link href="/">IndieCoder</Link>
      </h2>
      <div className="flex gap-1">
        <ul className="flex items-center justify-center gap-5 p-3">
          {SocialLinks.filter((l) => l.name !== "Gmail").map((link) => (
            <li
              className="text-light dark:text-dark text-lg transition-all hover:translate-y-[-2px]"
              key={link.name}
            >
              <a href={link.href} target="_blank">
                <span className="sr-only">{link.name}</span>
                <link.icon className="hover:fill-accent fill-text h-6 w-6 stroke-none transition-all sm:h-8 sm:w-8" />
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
