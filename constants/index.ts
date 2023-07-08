import { FaUserAstronaut, FaNewspaper } from 'react-icons/fa';
import { BsFillShareFill, BsGithub, BsSearch } from 'react-icons/bs';

export const NavLinks = [
  { href: '/', text: 'Posts', key: 'posts', icon: FaNewspaper },
  { href: '/about', text: 'About', key: 'about', icon: FaUserAstronaut },
  { href: '/projects', text: 'Projects', key: 'projects', icon: BsGithub },
  { href: '/links', text: 'Links', key: 'links', icon: BsFillShareFill },
  { href: '/search', text: 'Search', key: 'search', icon: BsSearch },
];
