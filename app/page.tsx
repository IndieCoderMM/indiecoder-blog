import PostPreview from '@/components/PostPreview';
import { BsGrid1X2 } from 'react-icons/bs';
import { getPosts } from '@/services';
import sortPostsByDate from '@/utils/sortPostsByDate';

export default async function Home() {
  const posts = await getPosts();
  sortPostsByDate(posts);
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

// Refresh every 6 hours
export const revalidate = 3600 * 6;
