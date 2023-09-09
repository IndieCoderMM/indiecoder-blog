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
    <article className="bg-foreground border-border group relative h-full overflow-hidden rounded-xl border shadow-sm transition-all duration-75 ease-in hover:shadow-xl">
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
        <header className="text-text text-lg font-medium">
          <h3>
            <Link
              href={
                props.externalLink ? props.externalLink : `/posts/${props.slug}`
              }
              className="expandLink"
              target={props.externalLink ? "_blank" : undefined}
            >
              <span className="from-accent to-accent bg-gradient-to-r bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                {props.title}
              </span>
            </Link>
            {props.externalLink && (
              <span className="bg-foreground absolute right-0 top-0 rounded-bl-lg p-1 ">
                <ArrowTopRightOnSquareIcon className="h-7 w-7" />
              </span>
            )}
          </h3>
        </header>

        <p className="text-gray-light">{props.excerpt}</p>
        <ul className="text-gray-light flex flex-wrap gap-3 text-sm">
          {props.categories?.map((category) => (
            <li key={category.slug}>#{category.slug}</li>
          ))}
        </ul>

        <div className="flexBetween text-gray-light mt-3 flex-wrap text-sm">
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
    </article>
  );
};

export default PostPreview;
