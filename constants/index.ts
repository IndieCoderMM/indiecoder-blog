import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

export const NavLinks = [
  { href: '/', text: 'Posts', key: 'posts', icon: HomeIcon },
  {
    href: '/about',
    text: 'About',
    key: 'about',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    href: '/projects',
    text: 'Projects',
    key: 'projects',
    icon: CodeBracketSquareIcon,
  },
  {
    href: '/solutions',
    text: 'Solutions',
    key: 'solutions',
    icon: PuzzlePieceIcon,
  },
];

// { href: '/search', text: 'Search', key: 'search', icon: BiSolidSearch },
// { href: '/links', text: 'Links', key: 'links', icon: HiMailOpen },

export const AboutMe = [
  {
    key: 'intro',
    text: "Hi there, 👋 I'm Hein Thant, a web developer from Myanmar",
    icon: InformationCircleIcon,
  },
  {
    key: 'headline',
    text: 'Caffeinated coder and game-dev enthusiast',
    icon: InformationCircleIcon,
  },
  {
    key: 'blogging',
    text: 'Blogging about my experiences, to help others and to keep track of my own journey',
    icon: InformationCircleIcon,
  },
  {
    key: 'opensource',
    text: 'Obsessed with open-source projects. Collaborating, innovating and building cool stuff together? Count me in! 😎',
    icon: InformationCircleIcon,
  },
];

export const SocialLinks = [
  {
    href: 'https://github.com/IndieCoderMM',
    icon: '/icons/github.svg',
    name: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/hthantoo/',
    icon: '/icons/linkedin.svg',
    name: 'LinkedIn',
  },
  {
    href: 'mailto:hthant00chk@gmail.com',
    icon: '/icons/gmail.svg',
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
