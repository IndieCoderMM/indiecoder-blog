import PostPreview from '@/components/PostPreview';
import { getPosts } from '@/services';
import { NewspaperIcon } from '@heroicons/react/24/outline';

export default async function Home() {
  const posts = await getPosts();

  const postPreviews = posts.map((post) => (
    <PostPreview key={post.id} {...post} />
  ));

  return (
    <section>
      <header className="flex items-center pageHeading mb-5">
        <NewspaperIcon className="w-8 h-8" />
        <h1>
          <span className="mr-1">{posts.length}</span>
          Posts Total
        </h1>
      </header>
      <div className="grid gap-4 w-full max-w-xl mx-auto">{postPreviews}</div>
    </section>
  );
}

// Refresh every 1 hour
export const revalidate = 3600 * 1;
