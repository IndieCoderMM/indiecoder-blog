import PostPreview from '@/components/PostPreview';
import { getPosts } from '@/services';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { NewspaperIcon } from '@heroicons/react/24/outline';
// import { posts } from '@/constants/sample';

export default async function Home() {
  // ! Enable before redeploy
  const posts = await getPosts();

  sortPostsByDate(posts);
  const postPreviews = posts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section>
      <header className="flex items-center pageHeading">
        <NewspaperIcon className="w-8 h-8" />
        <h2>
          <span className="mr-1">{posts.length}</span>
          Posts Total
        </h2>
      </header>
      <div className="grid gap-4 w-full max-w-xl mx-auto">{postPreviews}</div>
    </section>
  );
}

// Refresh every 6 hours
// export const revalidate = 3600 * 6;
