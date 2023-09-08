"use client";

import { SocialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="paddings mt-8 w-full ">
      <div className="rounded-2xl bg-dark-gray px-8 py-6 text-center text-light-gray lg:pt-12">
        <h2 className="text-lg font-bold lg:text-3xl">Connect with Me</h2>
        <ul className="flex items-center justify-center gap-5 p-3">
          {SocialLinks.map((link) => (
            <li className="text-lg hover:underline" key={link.name}>
              <a href={link.href} target="_blank">
                <span className="">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex w-full justify-between gap-1 lg:mt-8">
          <p>
            &copy; 2023{" "}
            <a href="https://www.indiecoder.tech" target="_blank">
              <span>www.indiecoder.tech</span>
            </a>
          </p>
          <p>Developed by IndieCoderMM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
