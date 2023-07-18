import Link from 'next/link';
import { Post } from '@/common.types';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import {
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  LanguageIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import calculateReadingTime from '@/utils/calculateReadingTime';

const PostPreview = (props: Post) => {
  const iconStyle = 'w-6 h-6';
  return (
    <div className="relative shadow rounded-sm h-full transition-all duration-75 ease-in hover:shadow-lg border border-slate-100 overflow-hidden">
      {props.coverImage && (
        <div className="p-1">
          <Image
            src={props.coverImage.url}
            alt={`Cover of ${props.title}`}
            sizes="100vw"
            width={0}
            height={0}
            className="w-full rounded-sm"
          />
        </div>
      )}
      <section className="grid gap-2 p-3  lg:px-5">
        <header className="font-medium text-lg text-accent-color hover:underline expandLink">
          <h2>
            <Link
              href={
                props.externalLink ? props.externalLink : `posts/${props.slug}`
              }
              className="hover:underline expandLink"
              target={props.externalLink ? '_blank' : undefined}
            >
              {props.title}
            </Link>
            {props.externalLink && (
              <span className="absolute top-0 right-0 bg-white p-1 rounded-lg">
                <ArrowTopRightOnSquareIcon className="w-7 h-7" />
              </span>
            )}
          </h2>
        </header>

        <h3 className="text-slate-500">{props.excerpt}</h3>
        <ul className="flex gap-3 text-sm text-slate-500 flex-wrap">
          {props.categories?.map((category) => (
            <li key={category.slug}>#{category.slug}</li>
          ))}
        </ul>

        <div className="flexBetween flex-wrap text-gray-400 text-sm mt-3">
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
            <LanguageIcon className={iconStyle} aria-label="written language" />
            <p>{props.language}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPreview;
