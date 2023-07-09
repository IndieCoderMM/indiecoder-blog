import { AboutMe } from '@/constants';
import Link from 'next/link';
import {
  BsFacebook,
  BsFillChatDotsFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';

const AboutPage = () => {
  const iconStyle =
    'rounded-full w-12 h-12 ml-[-3.5rem] text-xl bg-light-gray ring-2 ring-white flex flex-shrink-0 items-center justify-center';
  return (
    <section>
      <ul className="border-l-2 p-8 pr-0 flex flex-col gap-5 w-[85%] max-w-3xl mx-auto">
        {AboutMe.map((data) => (
          <li className="flex gap-4" key={data.key}>
            <div className={iconStyle}>
              <data.icon className="text-slate-500" />
            </div>
            <p className="text-l pt-3">{data.text}</p>
          </li>
        ))}
        <li className="flex gap-4">
          <div className={iconStyle + ' bg-primary-blue'}>
            <BsFillChatDotsFill className="text-white" />
          </div>
          <div className="pt-3">
            <p className="text-l">
              Let&apos;s connect and collaborate. I&apos;d love to exchange
              ideas and learn from each other!
            </p>
            <div className="flex items-center justify-center gap-10 p-5 text-3xl border rounded-lg mt-3">
              <Link href="https://github.com/IndieCoderMM">
                <span className="sr-only">GitHub</span>
                <BsGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/hthantoo/">
                <span className="sr-only">LinkedIn</span>
                <BsLinkedin />
              </Link>
              <Link href="https://facebook.com/">
                <span className="sr-only">Facebook</span>
                <BsFacebook />
              </Link>
              <Link href="https://twitter.com/">
                <span className="sr-only">Twitter</span>
                <BsTwitter />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutPage;
