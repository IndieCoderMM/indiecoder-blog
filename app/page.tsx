import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const heroSection = (
    <section className="grid bg-white grid-cols-3 items-center justify-items-center p-3">
      <div className="col-span-2 text-lg p-5">
        <h1 className="font-bold text-5xl mb-3">Welcome to My Blog!</h1>
        <h3 className="font-bold text-xl mb-5">Hello, I&apos;m Indie Coder!</h3>
        <p className="text-md">
          As a web developer based in Myanmar, I&apos;m passionate about sharing
          my knowledge through articles, tutorials, and fun projects. I believe
          that programming can be an exciting and playful experience, which is
          why I enjoy gamifying the learning process. Join me as we explore the
          world of programming together, unlocking new skills, and embracing the
          joy of creation.
        </p>
      </div>
      <img src="/developer_illustration.jpg" width={400} alt="" />
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
