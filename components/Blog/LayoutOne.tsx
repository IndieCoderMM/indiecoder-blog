import { Post } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Tag";

const LayoutOne = (post: Post) => {
  return (
    <div className="group relative inline-block h-full w-full overflow-hidden rounded-xl">
      <Image
        priority
        src={post?.coverImage?.url}
        alt={post.title}
        width={1600}
        height={840}
        className="-z-10 h-full w-full rounded-xl object-fill transition-all duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col justify-end bg-gradient-to-b from-transparent via-black/70 to-black/90 p-4 sm:gap-2 xl:p-10">
        <Tag
          className="z-50 text-sm font-medium text-light"
          category={post.categories[0]}
        />
        <Link
          href={post.externalLink ? post.externalLink : `posts/${post.slug}`}
          target={post.externalLink ? "_blank" : "_self"}
        >
          <h1 className="text-lg font-bold leading-tight text-white md:text-3xl xl:text-4xl">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_4px]">
              {post.title}
            </span>
          </h1>
        </Link>
        <p className="hidden text-xl font-medium text-light lg:inline-block">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default LayoutOne;
