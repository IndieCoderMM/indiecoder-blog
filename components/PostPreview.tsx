import Link from 'next/link';
import { Post } from '@/common.types';
import {
  RiCalendarEventLine,
  RiExternalLinkLine,
  RiMessage3Line,
} from 'react-icons/ri';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';

const PostPreview = (props: Post) => {
  return (
    <div className="relative shadow-md rounded-sm h-full hover:shadow-lg bg-white">
      {props.coverImage && (
        <Image
          src={props.coverImage.url}
          alt={`Cover of ${props.title}`}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full border-b"
        />
      )}
      <section className="grid gap-2 p-3 lg:p-5">
        <header className="font-medium text-lg text-primary-blue hover:underline expandLink">
          <h2>
            <Link
              href={
                props.externalLink ? props.externalLink : `posts/${props.slug}`
              }
              className="hover:underline expandLink"
            >
              {props.title}
            </Link>
            {props.externalLink && (
              <RiExternalLinkLine className="text-xl ml-1 inline" />
            )}
          </h2>
        </header>

        <h3 className="text-slate-500">{props.excerpt}</h3>
        <ul className="flex gap-3 text-slate-500 flex-wrap">
          {props.categories?.map((category) => (
            <li key={category.slug}>#{category.name}</li>
          ))}
        </ul>

        <div className="flexBetween text-gray-400 text-sm mt-auto">
          <div className="flexCenter gap-1">
            <RiCalendarEventLine className="text-lg" />
            <time
              dateTime={
                props.originalDate ? props.originalDate : props.publishedAt
              }
            >
              {formatDate(
                props.originalDate ? props.originalDate : props.publishedAt,
              )}
            </time>
          </div>
          <div className="flexCenter gap-1">
            <RiMessage3Line className="text-lg" />
            <p>{props.language}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPreview;
