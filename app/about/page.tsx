import { AboutMe, SocialLinks } from '@/constants';
import Link from 'next/link';
import {
  BsFacebook,
  BsFillChatDotsFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

const AboutPage = () => {
  const iconStyle =
    'rounded-full w-12 h-12 ml-[-3.5rem] text-xl bg-light-gray ring-2 ring-white flex flex-shrink-0 items-center justify-center';
  return (
    <section>
      <ul className="border-l-2 pl-8 pt-8 pr-1 flex flex-col gap-5 w-[85%] max-w-3xl mx-auto">
        {AboutMe.map((data) => (
          <li className="flex items-center gap-4" key={data.key}>
            <div className={iconStyle}>
              <data.icon className="text-slate-500" />
            </div>
            <p className="text-l">{data.text}</p>
          </li>
        ))}
        <li className="flex gap-4">
          <div className={iconStyle + ' bg-primary-blue'}>
            <BsFillChatDotsFill className="text-white" />
          </div>
          <div>
            <p className="text-l">
              Let&apos;s connect and collaborate. I&apos;d love to exchange
              ideas and learn from each other!
            </p>
            <div className="flex items-center justify-center gap-10 p-5 text-3xl border rounded-lg mt-3">
              {SocialLinks.map((link) => (
                <Link href={link.href} key={link.name} title={link.name}>
                  <span className="sr-only">{link.name}</span>
                  <link.icon className=" text-slate-500" />
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
