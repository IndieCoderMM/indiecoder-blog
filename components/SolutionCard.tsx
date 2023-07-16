import { Solution } from '@/common.types';
import { FireIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface LevelStyles {
  [key: string]: string;
}

const SolutionCard = ({ solution }: { solution: Solution }) => {
  const tagStyle: LevelStyles = {
    easy: 'text-green bg-green-200',
    medium: 'text-yellow-600 bg-yellow-200',
    hard: 'text-red bg-red-200',
  };

  const buttonStyle =
    'py-1 px-3 border border-accent-color text-accent-color rounded-md flex items-center';

  return (
    <div className=" bg-green-400 rounded-lg">
      <div className="h-20">
        <FireIcon className="text-3xl transform rotate-45" />
      </div>
      <div className="flex flex-col items-start gap-3 p-3 rounded-lg bg-white">
        <h3 className="font-medium text-slate-600">{solution.title}</h3>
        <span
          className={
            tagStyle[solution.level] + ' text-xs px-3 py-1 rounded-full'
          }
        >
          {solution.level}
        </span>
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
