import { Post } from "@/common.types";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutTwo = (post: Post) => {
  return (
    <div className="group relative grid grid-cols-12 gap-2">
      <Link
        href={`/posts/${post.slug}`}
        className="absolute bottom-0 left-0 right-0 top-0 z-10"
      >
        <span className="sr-only">Read {post.title}</span>
      </Link>
      <div className="col-span-12 h-full overflow-hidden rounded-xl lg:col-span-4">
        <Image
          src={post?.coverImage?.url}
          alt={post.title}
          width={300}
          height={300}
          className="h-full w-full rounded-xl object-cover object-center transition-all duration-300 group-hover:scale-105 sm:aspect-square"
        />
      </div>

      <div className="col-span-8">
        <span className="text-sm font-bold text-accent-color">
          #{post.categories[0].name}
        </span>
        <h1 className="text-lg font-semibold leading-tight text-dark-gray dark:text-light-gray lg:text-2xl">
          <span className="bg-gradient-to-r from-accent-color to-accent-color bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
            {post.title}
          </span>
        </h1>
        <p className="hidden text-dark-gray/90 dark:text-light-gray xl:block">
          {post.excerpt}
        </p>
        <p className=" text-slate-800 dark:text-slate-500">
          {formatDate(post.originalDate)}
        </p>
      </div>
    </div>
  );
};

export default LayoutTwo;
