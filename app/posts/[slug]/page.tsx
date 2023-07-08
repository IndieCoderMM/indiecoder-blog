import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/utils/getPostMetaData';

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
    <div>
      <h2 className="text-3xl text-center text-violet-500">
        {post.data.title}
      </h2>
      <article className="prose lg:prose-xl mx-auto p-2">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
