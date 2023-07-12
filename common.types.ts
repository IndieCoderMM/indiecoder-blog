export interface PostMetaData {
  title: string;
  date: string;
  cover?: string;
  subtitle: string;
  language: string;
  externalLink?: string;
  tags: string[];
  slug: string;
}

export interface ProjectInterface {
  title: string;
  description: string;
  language: string;
  link: string;
  category: string;
  star: number;
}

export interface Category {
  name: string;
  slug: string;
}

export interface CoverImage {
  url: string;
}

export interface Post {
  publishedAt: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  categories: Category[];
  coverImage: CoverImage;
}
