"use client";

import { SocialLinks } from "@/constants";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="paddings mt-8 w-full ">
      <div className="rounded-2xl bg-dark-gray px-8 py-6 text-center text-light-gray lg:pt-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold lg:text-3xl">Connect with Me</h2>
          <ul className="flex items-center justify-center gap-5 p-3">
            {SocialLinks.map((link) => (
              <li
                className="text-lg text-dark-gray hover:underline"
                key={link.name}
              >
                <a href={link.href} target="_blank">
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-8 w-8 fill-light-gray stroke-none transition-all hover:fill-accent-color sm:h-10 sm:w-10" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto inline-block w-full max-w-3xl text-sm md:text-base">
            You can send a message directly to my inbox here. Whether you have
            thoughts about my blogs, projects, or just want to say hi, I&apos;d
            love to hear from you!
          </p>
          <ContactForm />
        </div>

        <div className="mt-8 flex w-full flex-col justify-between gap-2 sm:flex-row lg:mt-12">
          <p className="text-sm sm:text-base">
            &copy; 2023{" "}
            <a href="https://www.indiecoder.tech" target="_blank">
              <span>www.indiecoder.tech</span>
            </a>
          </p>
          <p className="text-sm sm:text-base">Developed by IndieCoderMM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
