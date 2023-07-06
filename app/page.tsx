import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const heroSection = (
    <section className="grid bg-white grid-cols-1 items-center justify-items-center text-center p-3">
      <h3 className="font-bold text-3xl mb-3">
        Hello, I&apos;m Indie Coder 👋
      </h3>
      <h1 className="font-bold text-xl mb-3">Welcome to My Blog!</h1>
      <p className="text-md">
        I&apos;m passionate about sharing my knowledge through articles,
        tutorials, and fun projects. I believe that programming can be an
        exciting and playful experience, which is why I enjoy gamifying the
        learning process.
      </p>
      <p>
        Join me as we explore the world of programming together, unlocking new
        skills, and embracing the joy of creation.
      </p>
    </section>
  );
  return (
    <>
      {heroSection}
      <section className="px-5">
        <h2 className="font-bold text-2xl mb-5">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postPreviews}
        </div>
      </section>
    </>
  );
}
