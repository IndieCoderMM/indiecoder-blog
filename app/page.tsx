import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const postMetaData = getPostMetaData()
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 6);
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const heroSection = (
    <section className=" bg-white text-center p-3 max-w-3xl text-xl mx-auto mb-6">
      <h3 className="font-bold text-3xl mb-3">
        Hello, I&apos;m Indie Coder 👋
      </h3>
      <h1 className="font-bold mb-3">Welcome to My Blog!</h1>
      <p>
        I&apos;m passionate about sharing my knowledge through articles,
        tutorials, and fun projects.
      </p>
      <br />
      <p>Join me as we explore the world of programming together!</p>
    </section>
  );
  return (
    <main className="p-1 md:px-10">
      {heroSection}
      <section>
        <h2 className="font-bold text-2xl mb-5">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postPreviews}
        </div>
      </section>
    </main>
  );
}
