import Link from "next/link";
import { Post } from "@/common.types";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import {
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import calculateReadingTime from "@/utils/calculateReadingTime";

const PostPreview = (props: Post) => {
  const iconStyle = "w-6 h-6";
  return (
    <div className="group relative h-full overflow-hidden rounded-xl shadow-sm transition-all duration-75 ease-in hover:shadow-xl dark:border-slate-600">
      {props.coverImage && (
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={props.coverImage.url}
            alt={`Cover of ${props.title}`}
            sizes="(max-width: 768px) 100vw, 500px"
            width={500}
            height={500}
            className="h-auto w-full rounded-sm transition-all duration-200 ease-in group-hover:scale-105"
          />
        </div>
      )}
      <section className="grid gap-2 p-3  lg:px-5">
        <header className="expandLink text-lg font-medium text-dark-gray hover:underline">
          <h3>
            <Link
              href={
                props.externalLink ? props.externalLink : `posts/${props.slug}`
              }
              className="expandLink hover:underline"
              target={props.externalLink ? "_blank" : undefined}
            >
              {props.title}
            </Link>
            {props.externalLink && (
              <span className="absolute right-0 top-0 rounded-bl-lg bg-white p-1 dark:bg-light-brown">
                <ArrowTopRightOnSquareIcon className="h-7 w-7" />
              </span>
            )}
          </h3>
        </header>

        <p className="text-slate-500 dark:text-slate-300">{props.excerpt}</p>
        <ul className="flex flex-wrap gap-3 text-sm text-slate-500">
          {props.categories?.map((category) => (
            <li key={category.slug}>#{category.slug}</li>
          ))}
        </ul>

        <div className="flexBetween mt-3 flex-wrap text-sm text-gray-400">
          <div className="flexCenter gap-1">
            <CalendarDaysIcon
              className={iconStyle}
              aria-label="published date"
            />
            <time dateTime={props.originalDate}>
              {formatDate(props.originalDate)}
            </time>
          </div>
          {!props.externalLink && (
            <div className="flexCenter gap-1">
              <BookOpenIcon className={iconStyle} aria-label="reading time" />
              <p>
                {calculateReadingTime(props.content)}
                <span>&nbsp;min read</span>
              </p>
            </div>
          )}
          <div className="flexCenter gap-1">
            <GlobeAltIcon className={iconStyle} aria-label="written language" />
            <p>{props.language}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPreview;
