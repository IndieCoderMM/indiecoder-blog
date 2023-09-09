import { Solution } from "@/common.types";
import formatDate from "@/utils/formatDate";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  FireIcon,
  CheckBadgeIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface CardStyle {
  [key: string]: {
    text: string;
    bg: string;
    icon: any;
  };
}
const CardStyle: CardStyle = {
  easy: {
    text: "text-green-500",
    bg: "bg-green-200",
    icon: CheckBadgeIcon,
  },
  medium: {
    text: "text-yellow-500",
    bg: "bg-yellow-200",
    icon: ShieldExclamationIcon,
  },
  hard: {
    text: "text-red-500",
    bg: "bg-red-200",
    icon: FireIcon,
  },
};

const SolutionCard = ({ solution }: { solution: Solution }) => {
  const buttonStyle =
    "py-1 px-3 border border-border text-accent rounded-md flexCenter hover:shadow bg-foreground";
  const level = solution.level.toLowerCase();
  const { text: textStyle, bg: bgStyle, icon: Icon } = CardStyle[level];

  return (
    <div
      className={
        bgStyle +
        " flex flex-col overflow-hidden rounded-lg border-border shadow dark:border"
      }
    >
      <div className="h-12 overflow-hidden">
        <Icon
          className={
            textStyle + " float-right h-14 w-14 rotate-[30deg] transform "
          }
        />
      </div>
      <div className="flex h-full flex-col items-start gap-3 rounded-t-2xl bg-foreground p-3">
        <header className="w-full">
          <h3 className="font-medium">{solution.title}</h3>
          <div className="flex justify-between">
            <span
              className={`${textStyle} ${bgStyle} rounded-full px-3 py-1 text-xs`}
            >
              {solution.level}
            </span>
            <div className="flex items-center text-xs">
              <ClockIcon className="h-4 w-4" />
              <span>{formatDate(solution.publishedAt)}</span>
            </div>
          </div>
        </header>
        <div className="mt-auto flex gap-1">
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
