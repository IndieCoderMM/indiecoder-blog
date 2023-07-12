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
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  language: string;
  publishedAt: string;
  originalDate?: string;
  externalLink?: string;
  categories: Category[];
  coverImage: CoverImage;
}
