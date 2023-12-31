import { Post } from "@/common.types";
import React from "react";
import LayoutOne from "./Blog/LayoutOne";
import LayoutTwo from "./Blog/LayoutTwo";

const FeaturedPosts = (posts: Post[]) => {
  return (
    <section className="mt-8 w-full px-0 py-8 sm:py-4 lg:px-8 lg:py-16 xl:px-16">
      <h2 className="mb-8 text-2xl font-bold lg:text-4xl">Featured Posts</h2>
      <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-8 sm:gap-4">
        <article className="relative col-span-2 row-span-2 hidden sm:inline-block xl:col-span-1">
          <LayoutOne {...posts[1]} />
        </article>
        <article className="col-span-2 row-span-1 sm:col-span-1 sm:hidden">
          <LayoutTwo {...posts[1]} />
        </article>
        <article className="col-span-2 row-span-1 sm:col-span-1">
          <LayoutTwo {...posts[2]} />
        </article>
        <article className="col-span-2 row-span-1 sm:col-span-1">
          <LayoutTwo {...posts[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
