import { GitHubIcon, LinkedInIcon, RepoForkedIcon } from "@/components/icons";

import { GlobeAltIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketSquareIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  HeartIcon,
  PencilIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";

export const NavLinks = [
  { href: "/", text: "Home", key: "home", icon: HomeIcon },
  {
    href: "/about",
    text: "About",
    key: "about",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    href: "/categories/all",
    text: "Posts",
    key: "posts",
    icon: HashtagIcon,
  },
  {
    href: "/projects",
    text: "Projects",
    key: "projects",
    icon: CodeBracketSquareIcon,
  },
  {
    href: "/solutions",
    text: "Solutions",
    key: "solutions",
    icon: PuzzlePieceIcon,
  },
];

// { href: '/search', text: 'Search', key: 'search', icon: BiSolidSearch },
// { href: '/links', text: 'Links', key: 'links', icon: HiMailOpen },

export const AboutMe = [
  {
    key: "intro",
    text: "Hi there, 👋 I'm Hein Thant, a web developer from Myanmar",
    icon: HeartIcon,
  },
  {
    key: "headline",
    text: "Passionate about code, addicted to coffee ☕",
    icon: CommandLineIcon,
  },
  {
    key: "blogging",
    text: "Blogging about my experiences ✍ to help others and to keep track of my own journey",
    icon: PencilIcon,
  },
  {
    key: "opensource",
    text: "Collaborating and innovating with developers worldwide on open-source projects 🌐",
    icon: RepoForkedIcon,
  },
];

export const SocialLinks = [
  {
    href: "https://github.com/IndieCoderMM",
    icon: GitHubIcon,
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/hthantoo/",
    icon: LinkedInIcon,
    name: "LinkedIn",
  },
  {
    href: "https://www.heinthantoo.me",
    icon: GlobeAltIcon,
    name: "Portfolio",
  },
  {
    href: "mailto:hthant00chk@gmail.com",
    icon: EnvelopeIcon,
    name: "Gmail",
  },
];
