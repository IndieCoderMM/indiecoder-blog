import Link from 'next/link';
import { PostMetaData } from '@/common.types';
import {
  RiCalendarEventLine,
  RiExternalLinkLine,
  RiMessage3Line,
} from 'react-icons/ri';

const PostPreview = (props: PostMetaData) => {
  return (
    <div className="grid gap-3 relative border border-slate-200 p-4 rounded-sm h-full hover:shadow bg-white">
      <h2 className="font-medium text-lg text-primary-blue hover:underline expandLink">
        <Link
          href={props.externalLink ? props.externalLink : `posts/${props.slug}`}
        >
          {props.title}
        </Link>
        {props.externalLink && (
          <RiExternalLinkLine className="absolute top-2 right-2" />
        )}
      </h2>

      <h3 className="text-slate-500">{props.subtitle}</h3>

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
    </div>
  );
};

export default PostPreview;
