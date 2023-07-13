import Markdown from 'markdown-to-jsx';
import { BsCalendar3 } from 'react-icons/bs';
import { getPostDetails, getPosts } from '@/services';
import formatDate from '@/utils/formatDate';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getPostDetails(slug);

  return (
    <article>
      <header className="border-b border-slate-400">
        <h2 className="text-3xl font-semibold text-center">{post.title}</h2>
        <div className="flex items-center gap-2 py-5 text-slate-500">
          <BsCalendar3 />
          {formatDate(post.originalDate ? post.originalDate : post.publishedAt)}
        </div>
      </header>
      <section className="prose lg:prose-xl mx-auto p-2">
        <Markdown>{post.content}</Markdown>
      </section>
    </article>
  );
};

export default PostPage;
