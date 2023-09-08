import Markdown from "markdown-to-jsx";
import Image from "next/image";

import { getPostDetails, getPosts } from "@/services";
import CommentWidget from "@/components/CommentWidget";
import {
  BookOpenIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import formatDate from "@/utils/formatDate";
import calculateReadingTime from "@/utils/calculateReadingTime";
import Link from "next/link";

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = await getPostDetails(slug);

  return (
    <>
      <article>
        <div className="mb-2 flex items-center gap-1 py-2 text-lg lg:mb-4">
          <Link href="/" className=" text-dark-gray hover:underline">
            <span>Posts</span>
          </Link>
          <ChevronRightIcon className="h-5 w-5" />
          <span className=" text-gray-500">{post.title}</span>
        </div>

        <div className="w-full overflow-hidden">
          <Image
            src={post.coverImage.url}
            alt={`Cover of ${post.title}`}
            sizes="100vw"
            width={500}
            height={500}
            className="h-auto w-full border-b object-cover object-top"
          />
        </div>

        <header className="my-8">
          <h1 className="mb-2 text-left text-3xl font-bold lg:text-5xl">
            {post.title}
          </h1>
          <div className="flexStart flex-wrap gap-8 p-3 text-sm text-slate-500 dark:text-light-gray md:text-xl">
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="h-6 w-6" />
              <span className="sr-only">Published At: </span>
              {formatDate(post.originalDate)}
            </div>
            <div className="flex items-center gap-1">
              <BookOpenIcon className="h-6 w-6" />
              <span className="sr-only">Reading Time: </span>
              {calculateReadingTime(post.content)}
              <span>&nbsp;minutes</span>
            </div>
            <ul className="flex flex-wrap items-center gap-3">
              {post.categories.map((category) => (
                <li
                  className="darkBorder flex rounded-full bg-accent-color-light px-3 py-1 text-xs dark:bg-transparent md:text-lg"
                  key={category.slug}
                >
                  <span className="text-bold">#</span>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section className="prose mx-auto p-2 dark:prose-invert sm:prose-lg lg:prose-xl xl:prose-2xl">
          <Markdown>{post.content}</Markdown>
        </section>
      </article>
      <CommentWidget />
    </>
  );
};

export default PostPage;
