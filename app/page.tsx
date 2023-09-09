import FeaturedPosts from "@/components/FeaturedPosts";
import HeroSection from "@/components/HeroSection";
import PostPreview from "@/components/PostPreview";
import { getPosts } from "@/services";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  const postPreviews = posts
    .slice(4, 10)
    .map((post) => <PostPreview key={post.id} {...post} />);

  return (
    <>
      <HeroSection {...posts[0]} />
      <FeaturedPosts {...posts} />
      <section className="w-full px-0 py-2 lg:px-8 lg:py-16 xl:px-16">
        <header className="align-items mb-8 flex justify-between">
          <h2 className="text-2xl font-bold lg:text-4xl">Recent Posts</h2>
          <Link
            href="/categories/all"
            className="primaryBtn text-text border-text shadow-text lg:text-lg"
          >
            View All
          </Link>
        </header>
        <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {postPreviews}
        </div>
      </section>
    </>
  );
}

// Refresh every 1 hour
export const revalidate = 3600 * 1;
