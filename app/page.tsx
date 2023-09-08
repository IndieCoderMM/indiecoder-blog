import FeaturedPosts from "@/components/FeaturedPosts";
import HeroSection from "@/components/HeroSection";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/services";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default async function Home() {
  const posts = await getPosts();

  const postPreviews = posts
    .slice(4)
    .map((post) => <PostPreview key={post.id} {...post} />);

  return (
    <>
      <HeroSection {...posts[0]} />
      <FeaturedPosts {...posts} />
      <section className="w-full px-0 py-2 lg:px-8 lg:py-16 xl:px-16">
        <h2 className="mb-8 text-2xl font-bold lg:text-4xl">Recent Posts</h2>
        <div className="mx-auto grid w-full max-w-xl gap-4">{postPreviews}</div>
      </section>
    </>
  );
}

// Refresh every 1 hour
export const revalidate = 3600 * 1;
