import { AboutMe, SocialLinks } from '@/constants';
import Link from 'next/link';
import { UserPlusIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  const iconStyle =
    'rounded-full w-12 h-12 ml-[-3.5rem] text-xl  ring-4 ring-white flex flex-shrink-0 items-center justify-center';
  return (
    <section>
      <ul className="border-l-2 pl-8 pt-8 pr-1 flex flex-col gap-5 w-[85%] max-w-3xl mx-auto">
        {AboutMe.map((data) => (
          <li className="flex items-center gap-4" key={data.key}>
            <div className={iconStyle + ' bg-light-gray'}>
              <data.icon className="w-7 h-7 text-slate-400" />
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
              Let&apos;s connect and collaborate. I&apos;d love to exchange
              ideas and learn from each other!
            </p>
            <div className="flex items-center justify-center gap-10 py-5 px-2 text-3xl border rounded-lg mt-3">
              {SocialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  title={link.name}
                  className="hover:text-accent-color-light"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="w-10 h-10 fill-slate-500 stroke-none" />
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
