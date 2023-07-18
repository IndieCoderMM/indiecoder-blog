import { Solution } from '@/common.types';
import formatDate from '@/utils/formatDate';
import { ClockIcon } from '@heroicons/react/24/outline';
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
    'py-1 px-3 border text-accent-color rounded-md flexCenter hover:shadow dark:bg-light-brown';
  const level = solution.level.toLowerCase();
  const { text: textStyle, bg: bgStyle, icon: Icon } = CardStyle[level];

  return (
    <div
      className={
        bgStyle +
        ' rounded-lg shadow overflow-hidden dark:border border-slate-500'
      }
    >
      <div className="h-12 overflow-hidden">
        <Icon
          className={
            textStyle + ' w-14 h-14 transform rotate-[30deg] float-right '
          }
        />
      </div>
      <div className="flex flex-col items-start gap-3 p-3 rounded-t-2xl bg-white dark:bg-dark-gray">
        <header className="w-full">
          <h3 className="font-medium">{solution.title}</h3>
          <div className="flex justify-between">
            <span
              className={`${textStyle} ${bgStyle} text-xs px-3 py-1 rounded-full`}
            >
              {solution.level}
            </span>
            <div className="flex items-center text-xs">
              <ClockIcon className="w-4 h-4" />
              <span>{formatDate(solution.publishedAt)}</span>
            </div>
          </div>
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
