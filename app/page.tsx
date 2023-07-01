import getPostMetaData from '@/components/getPostMetaData';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
