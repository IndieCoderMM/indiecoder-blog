import { BiSolidSearch } from 'react-icons/bi';
import {
  BsFacebook,
  BsFillHeartFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { FaCoffee, FaFeatherAlt, FaUserAlt } from 'react-icons/fa';
import { HiNewspaper, HiUser, HiCodeBracketSquare } from 'react-icons/hi2';

export const NavLinks = [
  { href: '/', text: 'Posts', key: 'posts', icon: HiNewspaper },
  { href: '/about', text: 'About', key: 'about', icon: HiUser },
  {
    href: '/projects',
    text: 'Projects',
    key: 'projects',
    icon: HiCodeBracketSquare,
  },
  { href: '/search', text: 'Search', key: 'search', icon: BiSolidSearch },
];

// { href: '/links', text: 'Links', key: 'links', icon: HiMailOpen },

export const AboutMe = [
  {
    key: 'intro',
    text: "Hi there, 👋 I'm Hein Thant, a web developer from Myanmar",
    icon: FaUserAlt,
  },
  {
    key: 'headline',
    text: 'Caffeinated coder and game-dev enthusiast',
    icon: FaCoffee,
  },
  {
    key: 'blogging',
    text: 'Blogging about my experiences, to help others and to keep track of my own journey',
    icon: FaFeatherAlt,
  },
  {
    key: 'opensource',
    text: 'Obsessed with open-source projects. Collaborating, innovating and building cool stuff together? Count me in! 😎',
    icon: BsFillHeartFill,
  },
];

export const SocialLinks = [
  {
    href: 'https://github.com/IndieCoderMM',
    icon: BsGithub,
    name: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/hthantoo/',
    icon: BsLinkedin,
    name: 'LinkedIn',
  },
  {
    href: 'https://facebook.com/',
    icon: BsFacebook,
    name: 'Facebook',
  },
  {
    href: 'https://twitter.com/',
    icon: BsTwitter,
    name: 'Twitter',
  },
];
