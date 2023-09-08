import { Post } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutOne = (post: Post) => {
  return (
    <div className="group relative inline-block h-full w-full overflow-hidden rounded-xl">
      <Link
        href={`/posts/${post.slug}`}
        className="absolute bottom-0 left-0 right-0 top-0 z-10"
      >
        <span className="sr-only">Read {post.title}</span>
      </Link>
      <Image
        src={post?.coverImage?.url}
        alt={post.title}
        width={400}
        height={400}
        className="-z-10 h-full w-full rounded-xl object-fill object-top transition-all duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col justify-end gap-2 bg-gradient-to-b from-transparent to-black/90 p-4 xl:p-10">
        <span className="text-sm font-bold text-accent-color">
          #{post.categories[0].name}
        </span>
        <h1 className="text-lg font-bold leading-tight text-white xl:text-3xl">
          <span className="bg-gradient-to-r from-accent-color to-accent-color bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
            {post.title}
          </span>
        </h1>
        <p className="hidden text-xl font-medium text-light-gray lg:inline-block">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
};

export default LayoutOne;