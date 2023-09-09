import { Category } from "@/common.types";
import Link from "next/link";
import React from "react";

type Props = {
  category: Category;
  className?: string;
};

const Tag = (props: Props) => {
  return (
    <Link
      href={`/categories/${props.category.slug}`}
      className={`${props.className} inline-block w-fit rounded-full transition-all hover:underline`}
    >
      <span>#{props.category.name.replaceAll(" ", "")}</span>
    </Link>
  );
};

export default Tag;
