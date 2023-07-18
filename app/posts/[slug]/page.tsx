import Markdown from 'markdown-to-jsx';
import { getPostDetails, getPosts } from '@/services';
import formatDate from '@/utils/formatDate';
import Image from 'next/image';
import { BookOpenIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import calculateReadingTime from '@/utils/calculateReadingTime';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getPostDetails(slug);

  return (
    <article>
      <header className="border-b border-slate-400 mb-5">
        <h1 className="text-3xl font-bold text-center">{post.title}</h1>
        <div className="flexBetween flex-wrap p-3">
          <div className="flex items-center gap-1 text-slate-500">
            <CalendarDaysIcon className="w-6 h-6" />
            <span className="sr-only">Published At: </span>
            {formatDate(post.originalDate)}
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <BookOpenIcon className="w-6 h-6" />
            <span className="sr-only">Reading Time: </span>
            {calculateReadingTime(post.content)}
            <span>&nbsp;minutes</span>
          </div>
        </div>
      </header>
      <div>
        <Image
          src={post.coverImage.url}
          alt={`Cover of ${post.title}`}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full border-b"
        />
      </div>
      <ul className="flex items-center flex-wrap gap-3 my-3">
        {post.categories.map((category) => (
          <li
            className="flex px-3 py-1 rounded-full text-xs bg-accent-color-light"
            key={category.slug}
          >
            <span className="text-bold">#</span>
            {category.name}
          </li>
        ))}
      </ul>
      <section className="prose lg:prose-xl mx-auto p-2">
        <Markdown>{post.content}</Markdown>
      </section>
    </article>
  );
};

export default PostPage;
