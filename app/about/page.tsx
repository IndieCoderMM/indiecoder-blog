import { AboutMe, SocialLinks } from '@/constants';
import Link from 'next/link';
import { InboxArrowDownIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/ContactForm';

const AboutPage = () => {
  const iconStyle =
    'rounded-full w-12 h-12 ml-[-3.5rem] text-xl ring-4 ring-white dark:bg-light-brown dark:ring-dark-gray darkBorder flexCenter flex-shrink-0';
  return (
    <section>
      <h2 className="pageHeading">About Me</h2>
      <ul className="border-l-2 dark:border-accent-color pl-8 pt-8 pr-1 flex flex-col gap-5 w-[85%] max-w-3xl mx-auto">
        {AboutMe.map((data) => (
          <li className="flex items-center gap-4" key={data.key}>
            <div className={iconStyle + ' bg-accent-color-light'}>
              <data.icon className="w-7 h-7 text-accent-color" />
            </div>
            <p>{data.text}</p>
          </li>
        ))}
        <li className="flex gap-4">
          <div className={iconStyle + ' bg-accent-color-light'}>
            <UserPlusIcon className="w-7 h-7 text-accent-color" />
          </div>
          <div className="flex-1">
            <p>
              Feel free to connect with me.
              <p className="text-sm text-slate-500">
                &nbsp;Let&apos;s code, collaborate and build awesome things
                together! 🚀
              </p>
            </p>
            <div className="flexCenter shadow-inner dark:bg-light-brown gap-5 md:gap-10 p-3 text-3xl border rounded-lg mt-3">
              {SocialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  title={link.name}
                  className="transition duration-100 hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="w-10 h-10 fill-accent-color stroke-none hover:fill-indigo-400" />
                </Link>
              ))}
            </div>
          </div>
        </li>
        <li className="flex gap-4 ">
          <div className={iconStyle + ' bg-indigo-400'}>
            <InboxArrowDownIcon className="w-7 h-7 text-white dark:text-accent-color" />
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
