import { Solution } from '@/common.types';
import {
  FireIcon,
  CheckBadgeIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

interface CardStyle {
  [key: string]: {
    text: string;
    bg: string;
    icon: any;
  };
}
const CardStyle: CardStyle = {
  easy: {
    text: 'text-green-400',
    bg: 'bg-green-200',
    icon: CheckBadgeIcon,
  },
  medium: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-200',
    icon: ShieldExclamationIcon,
  },
  hard: {
    text: 'text-red-400',
    bg: 'bg-red-200',
    icon: FireIcon,
  },
};

const SolutionCard = ({ solution }: { solution: Solution }) => {
  const buttonStyle =
    'py-1 px-3 border text-accent-color rounded-md flex items-center hover:shadow';
  const level = solution.level.toLowerCase();
  const { text: textStyle, bg: bgStyle, icon: Icon } = CardStyle[level];

  return (
    <div className={bgStyle + ' rounded-lg shadow overflow-hidden'}>
      <div className="h-12 overflow-hidden">
        <Icon
          className={
            textStyle + ' w-14 h-14 transform rotate-[30deg] float-right '
          }
        />
      </div>
      <div className="flex flex-col items-start gap-3 p-3 rounded-lg rounded-t-2xl bg-white">
        <header>
          <h3 className="font-medium text-slate-600">{solution.title}</h3>
          <span
            className={`${textStyle} ${bgStyle} text-xs px-3 py-1 rounded-full`}
          >
            {solution.level}
          </span>
        </header>
        <div className="flex gap-1">
          <Link
            href={solution.challengeLink}
            target="_blank"
            className={buttonStyle}
          >
            Try Yourself
          </Link>
          <Link href={solution.link} target="_blank" className={buttonStyle}>
            View Solution
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
