import getPostMetaData from '@/utils/getPostMetaData';
import PostPreview from '@/components/PostPreview';
import { BsGrid1X2 } from 'react-icons/bs';
import { getPosts } from '@/services';
import { Post } from '@/common.types';

export default async function Home() {
  // const postMetaData = getPostMetaData();
  // const postPreviews = postMetaData
  //   .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  //   .map((post) => <PostPreview key={post.slug} {...post} />);
  const posts = await getPosts();
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section>
      <header className="flex items-center gap-3 mb-5  text-slate-400">
        <BsGrid1X2 className="text-xl" />
        <h2 className="text-xl">
          <span className="text-slate-700 mr-2">{posts.length}</span>
          Posts Total
        </h2>
      </header>
      <div className="grid gap-4 w-full max-w-xl mx-auto">{postPreviews}</div>
    </section>
  );
}
