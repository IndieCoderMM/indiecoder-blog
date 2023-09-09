import PostPreview from "@/components/PostPreview";
import Tag from "@/components/Tag";
import { getCategories, getPosts } from "@/services";

export const generateStaticParams = async () => {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const categories = await getCategories();
  const posts = await getPosts();

  const postPreviews = posts
    .filter((post) => {
      if (slug === "all") return true;
      return post.categories.some((category) => category.slug === slug);
    })
    .map((post) => <PostPreview key={post.id} {...post} />);

  return (
    <section className="w-full px-0 py-2 lg:p-8 xl:px-16">
      <header className="border-border space-y-2 border-b-2 md:space-y-4">
        <h1 className="text-2xl font-medium sm:text-3xl md:text-5xl">
          #{slug}
          <span className="text-sm font-normal text-gray-500 sm:text-base md:text-lg">
            ({postPreviews.length})
          </span>
        </h1>
        <p>Discover more categories and expand your knowledge!</p>
        <ul className="flex flex-wrap items-center gap-1 py-4 sm:gap-2">
          <li key="all">
            <Tag
              category={{ name: "All", slug: "all" }}
              className="border-border border p-1 md:px-4"
            />
          </li>
          {categories.map((category) => (
            <li key={category.slug}>
              <Tag
                category={category}
                className="border-border border p-1 md:px-4"
              />
            </li>
          ))}
        </ul>
      </header>
      <div className="mx-auto my-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:py-8 xl:grid-cols-3">
        {postPreviews}
      </div>
    </section>
  );
};

export default CategoryPage;
