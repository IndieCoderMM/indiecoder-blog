import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/utils/getPostMetaData';
import { BsCalendar3 } from 'react-icons/bs';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <article>
      <header>
        <h2 className="text-3xl text-center text-purple-500">
          {post.data.title}
        </h2>
        <div className="flex items-center gap-2 p-5 text-slate-500">
          <BsCalendar3 />
          {post.data.date}
        </div>
      </header>
      <section className="prose lg:prose-xl mx-auto p-2">
        <Markdown>{post.content}</Markdown>
      </section>
    </article>
  );
};

export default PostPage;
