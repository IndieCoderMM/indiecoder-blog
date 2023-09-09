import { Post } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";

const HeroSection = (post: Post) => {
  return (
    <div className="w-full">
      <article className="relative flex h-[40vh] flex-col items-start justify-end md:h-[60vh] xl:h-[75vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 rounded-2xl bg-gradient-to-b from-transparent to-black/90" />
        <Image
          priority
          src={post?.coverImage?.url}
          alt={post.title}
          fill
          className="-z-10 h-full w-full rounded-2xl object-cover object-center lg:object-fill"
        />

        <div className="z-0 flex w-full flex-col gap-1 p-4 md:gap-4 lg:w-3/4 lg:p-8 xl:p-16">
          <Tag
            category={post.categories[0]}
            className="text-light bg-black/50 px-2 py-1 font-medium sm:text-lg"
          />

          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
          >
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              <span className="from-accent to-accent bg-gradient-to-r bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                {post.title}
              </span>
            </h1>
          </Link>
          <p className=" font-medium text-white lg:text-2xl">{post.excerpt}</p>
          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
            className="primaryBtn text-light border-light shadow-light text-lg lg:text-2xl"
          >
            Read Article
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
