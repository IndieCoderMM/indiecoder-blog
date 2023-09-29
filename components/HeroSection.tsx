import { Post } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

const HeroSection = (post: Post) => {
  return (
    <div className="w-full px-0 lg:px-8 xl:px-16">
      <article className="relative flex flex-col items-start justify-end overflow-hidden rounded-2xl">
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 z-0 hidden rounded-2xl bg-gradient-to-b from-transparent to-black/90 md:block" /> */}
        <Image
          priority
          src={post?.coverImage?.url}
          alt={post.title}
          width={1600}
          height={840}
          className="-z-10 h-full w-full object-fill sm:object-cover"
        />

        <div className="group bottom-0 left-0 z-0 flex w-full flex-col gap-1 bg-foreground p-4 backdrop-blur-md md:absolute md:gap-4 md:bg-white/80 md:dark:bg-black/80 lg:p-8 xl:p-16">
          <Tag
            category={post.categories[0]}
            className="bg-light px-2 py-1 font-medium text-text dark:bg-dark sm:text-lg"
          />

          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
            target={post.externalLink ? "_blank" : "_self"}
          >
            <h1 className="text-xl font-bold leading-tight text-text sm:text-3xl lg:text-5xl">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
                {post.title}
              </span>
            </h1>
          </Link>
          <p className="font-medium text-text  lg:text-2xl">{post.excerpt}</p>
          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
            className="primaryBtn border-text text-lg text-text shadow-light lg:text-2xl"
          >
            Read Article
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
