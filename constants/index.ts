import { RiGitRepositoryFill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillHeartFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaCoffee, FaFeatherAlt, FaUserAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { HiNewspaper, HiUser, HiCodeBracketSquare } from 'react-icons/hi2';

export const NavLinks = [
  { href: '/', text: 'Posts', key: 'posts', icon: HiNewspaper },
  { href: '/about', text: 'About', key: 'about', icon: AiFillMessage },
  {
    href: '/projects',
    text: 'Projects',
    key: 'projects',
    icon: RiGitRepositoryFill,
  },
  {
    href: '/solutions',
    text: 'Solutions',
    key: 'solutions',
    icon: HiCodeBracketSquare,
  },
];

// { href: '/search', text: 'Search', key: 'search', icon: BiSolidSearch },
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
    href: 'mailto:hthant00chk@gmail.com',
    icon: SiGmail,
    name: 'Facebook',
  },
];

export const TutoProjects = [
  {
    title: 'dino-jump',
    description: 'Simple javascript game for beginners',
    link: 'https://github.com/IndieCoderMM/dino-jump',
    star: 0,
    language: 'Javascript',
    category: 'game',
  },
  {
    title: 'pokeverse',
    description:
      'SPA created to demonstrate the usage of Redux Toolkit in React app',
    link: 'https://github.com/IndieCoderMM/pokeverse',
    star: 3,
    language: 'Javascript',
    category: 'web',
  },
  {
    title: 'tictactoe-ai',
    description:
      'Unbeatable Tic-tac-toe A.I. can calculate the best moves using Minimax algorithm. Built in Python using Pygame library',
    link: 'https://github.com/IndieCoderMM/tictactoe-ai',
    star: 5,
    language: 'Python',
    category: 'game',
  },
  {
    title: 'BridgeHero-TurtleGame',
    description:
      'Fun arcade game with procedurally generated levels and colorful graphics. Built with Turtle',
    link: 'https://github.com/IndieCoderMM/BridgeHero-TurtleGame',
    star: 3,
    language: 'Python',
    category: 'game',
  },
  {
    title: 'snake-game',
    description: 'Classic Snake Game in Pygame',
    link: 'https://github.com/IndieCoderMM/snake-game',
    star: 0,
    language: 'Python',
    category: 'game',
  },
  {
    title: 'MemoryMatrix-Pygame',
    description: 'Beginner Pygame Project',
    link: 'https://github.com/IndieCoderMM/MemoryMatrix-Pygame',
    star: 0,
    language: 'Python',
    category: 'game',
  },
];
