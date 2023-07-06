import Link from 'next/link';
import { PostMetaData } from './PostMetaData';

const PostPreview = (props: PostMetaData) => {
  return (
    <Link href={`posts/${props.slug}`}>
      <div className="border border-slate-200 p-4 rounded-md h-full shadow-md hover:ring-1 bg-white">
        <h2 className="font-bold text-violet-500">{props.title}</h2>
        <p className="text-md text-slate-500">{props.subtitle}</p>
        <time dateTime={props.date} className="text-gray-400 text-sm mt-auto">
          {new Date(props.date).toDateString()}
        </time>
      </div>
    </Link>
  );
};

export default PostPreview;
