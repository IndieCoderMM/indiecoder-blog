import { AboutMe, SocialLinks } from '@/constants';
import Link from 'next/link';
import { UserPlusIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  const iconStyle =
    'rounded-full w-12 h-12 ml-[-3.5rem] text-xl  ring-4 ring-white flex flex-shrink-0 items-center justify-center';
  return (
    <section>
      <h1 className="pageHeading">About Me</h1>
      <ul className="border-l-2 pl-8 pt-8 pr-1 flex flex-col gap-5 w-[85%] max-w-3xl mx-auto">
        {AboutMe.map((data) => (
          <li className="flex items-center gap-4" key={data.key}>
            <div className={iconStyle + ' bg-accent-color-light'}>
              <data.icon className="w-7 h-7 text-accent-color" />
            </div>
            <p>{data.text}</p>
          </li>
        ))}
        <li className="flex gap-4">
          <div className={iconStyle + ' bg-accent-color'}>
            <UserPlusIcon className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-l">
              Feel free to connect with me. I&apos;d love to exchange ideas and
              learn from each other!
            </p>
            <div className="flex items-center justify-center shadow-inner gap-10 py-5 px-2 text-3xl border rounded-lg mt-3">
              {SocialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  title={link.name}
                  className="transition duration-100 hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="w-10 h-10 fill-accent-color stroke-none" />
                </Link>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
