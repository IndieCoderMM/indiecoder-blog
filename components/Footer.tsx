import { SocialLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-slate-400 border-t border-slate-300 mt-6 py-6">
        <h2>&copy; 2023 www.indiecoder.tech</h2>
        <h3>Developed by IndieCoderMM</h3>
        <ul className="flex items-center justify-center flex-wrap gap-3 pt-3 pb-5">
          {SocialLinks.map((link) => (
            <li className="text-lg" key={link.name}>
              <Link href={link.href}>
                <span className="sr-only">{link.name}</span>
                <link.icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
