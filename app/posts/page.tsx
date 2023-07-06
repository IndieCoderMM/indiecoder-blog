import PostPreview from '@/components/PostPreview';
import getPostMetaData from '@/components/getPostMetaData';

export default function PostIndex() {
  const postMetaData = getPostMetaData().sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section className="max-w-3xl mx-auto p-3 md:p-10">
      <h2 className="font-bold text-2xl text-slate-700 text-center mb-5">
        All Posts
      </h2>
      <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
    </section>
  );
}
