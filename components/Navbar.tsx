"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const spanVariants = {
  closed: {
    opacity: 0,
    width: 0,
  },
  open: {
    opacity: 100,
    width: "auto",
    transition: {
      type: "tween",
      delay: 0.25,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  idle: {
    scale: 1,
  },
  tap: {
    scale: 1.2,
    transition: {
      type: "spring",
      delay: 0,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const currentRoute = usePathname();

  const linkStyle =
    "flexCenter w-auto gap-1 px-3 py-1 text-gray-light hover:text-primary hover:dark:text-primary";
  const linkIconStyle = "w-8 h-8";
  const activeIconStyle = linkIconStyle + " text-accent";

  return (
    <nav className="border-border bg-foreground sticky top-0 z-50 w-full border-b py-2 lg:fixed lg:left-1/2 lg:top-2 lg:max-w-lg lg:translate-x-[-50%] lg:rounded-full lg:border xl:max-w-2xl xl:py-4">
      <ul className="flex w-full items-center justify-around">
        {NavLinks.map((link) => (
          <motion.li
            className={`flex justify-center overflow-hidden rounded-full dark:bg-transparent ${
              currentRoute === link.href && "darkBorder  bg-light"
            }`}
            key={link.key}
            initial="idle"
            whileTap="tap"
            variants={linkVariants}
          >
            <Link href={link.href} title={link.text} className={linkStyle}>
              <link.icon
                className={
                  currentRoute === link.href ? activeIconStyle : linkIconStyle
                }
              />

              <motion.div
                initial="closed"
                animate={currentRoute === link.href ? "open" : "closed"}
                className={`text-accent font-medium`}
                variants={spanVariants}
              >
                {link.text}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
