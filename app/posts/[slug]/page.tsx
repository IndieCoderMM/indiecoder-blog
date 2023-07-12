import Markdown from 'markdown-to-jsx';
import getPostMetaData from '@/utils/getPostMetaData';
import { BsCalendar3 } from 'react-icons/bs';
import { getPostDetails, getPosts } from '@/services';

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getPostDetails(slug);

  return (
    <article>
      <header>
        <h2 className="text-3xl text-center text-purple-500">{post.title}</h2>
        <div className="flex items-center gap-2 p-5 text-slate-500">
          <BsCalendar3 />
          {post.publishedAt}
        </div>
      </header>
      <section className="prose lg:prose-xl mx-auto p-2">
        <Markdown>{post.content}</Markdown>
      </section>
    </article>
  );
};

export default PostPage;
