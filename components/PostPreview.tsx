import Link from 'next/link';
import { PostMetaData } from '@/common.types';
import {
  RiCalendarEventLine,
  RiExternalLinkLine,
  RiMessage3Line,
} from 'react-icons/ri';
import Image from 'next/image';

const PostPreview = (props: PostMetaData) => {
  return (
    <div className="relative border-2 border-slate-200 rounded-sm h-full hover:shadow bg-white">
      {props.cover && (
        <Image
          src={props.cover}
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

        <h3 className="text-slate-500">{props.subtitle}</h3>
        <ul className="flex gap-3 text-slate-500 flex-wrap">
          {props.tags?.map((t) => (
            <li key={t}>#{t}</li>
          ))}
        </ul>

        <div className="flexBetween text-gray-400 text-sm mt-auto">
          <div className="flexCenter gap-1">
            <RiCalendarEventLine className="text-lg" />
            <time dateTime={props.date}>
              {new Date(props.date).toLocaleDateString('en-us', {
                day: '2-digit',
                year: 'numeric',
                month: 'short',
              })}
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
