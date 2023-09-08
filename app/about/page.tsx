import { AboutMe, SocialLinks } from "@/constants";
import Link from "next/link";
import { InboxArrowDownIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";

const AboutPage = () => {
  const iconStyle =
    "rounded-full w-12 h-12 ml-[-3.5rem] text-xl ring-4 ring-white dark:bg-light-brown dark:ring-dark-gray darkBorder flexCenter flex-shrink-0";
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="pageHeading">About Me</h2>
      <ul className="mx-auto flex w-[90%] max-w-3xl flex-col gap-5 border-l-2 pl-8 pr-1 pt-8 dark:border-accent-color lg:gap-8">
        {AboutMe.map((data) => (
          <li className="flex items-center gap-4" key={data.key}>
            <div className={iconStyle + " bg-accent-color-light"}>
              <data.icon className="h-7 w-7 text-accent-color" />
            </div>
            <p className="text-lg md:text-xl">{data.text}</p>
          </li>
        ))}
        <li className="flex gap-4">
          <div className={iconStyle + " bg-accent-color-light"}>
            <UserPlusIcon className="h-7 w-7 text-accent-color" />
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl">
              Feel free to connect with me.
              <p className="text-sm text-slate-500">
                &nbsp;Let&apos;s code, collaborate and build awesome things
                together! 🚀
              </p>
            </p>
            <div className="flexCenter mt-3 gap-5 rounded-lg border p-3 text-3xl shadow-inner dark:bg-light-brown md:gap-10">
              {SocialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  title={link.name}
                  className="text-light-gray transition duration-100 hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-10 w-10 fill-accent-color stroke-none hover:fill-indigo-400" />
                </Link>
              ))}
            </div>
          </div>
        </li>
        <li className="flex gap-4 ">
          <div className={iconStyle + " bg-indigo-400"}>
            <InboxArrowDownIcon className="h-7 w-7 text-white dark:text-accent-color" />
          </div>
          <div className="flex-1">
            <p>You can send a message directly to my inbox here.</p>
            <p className="text-sm text-slate-500">
              Whether you have thoughts about my blogs, projects, or just want
              to say hi, I&apos;d love to hear from you! 😊
            </p>
            <ContactForm />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
