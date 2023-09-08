import { Post } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = (post: Post) => {
  return (
    <div className="w-full">
      <article className="relative flex h-[50vh] flex-col items-start justify-end xl:h-[85vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-0 rounded-2xl bg-gradient-to-b from-transparent via-black/70 to-black/90" />
        <Image
          priority
          src={post?.coverImage?.url}
          alt={post.title}
          fill
          className="-z-10 h-full w-full rounded-2xl object-cover object-center lg:object-fill"
        />

        <div className="z-0 flex w-full flex-col gap-4 p-4 lg:w-3/4 lg:p-8 xl:p-16">
          <span className="text-lg font-bold text-accent-color">
            #{post.categories[0].name}
          </span>

          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
          >
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              <span className="bg-gradient-to-r from-accent-color to-accent-color bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                {post.title}
              </span>
            </h1>
          </Link>
          <p className=" font-medium text-white lg:text-2xl">{post.excerpt}</p>
          <Link
            href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
            className="block max-w-[250px] rounded-full border border-light-gray px-8 py-2 text-center text-xl font-semibold text-white transition-colors hover:bg-light-gray hover:text-accent-color lg:px-10 lg:py-4 lg:text-2xl"
          >
            Read More
          </Link>
        </div>
      </article>
    </div>
  );
};

export default HeroSection;
