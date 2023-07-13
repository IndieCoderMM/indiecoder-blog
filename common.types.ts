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

export interface Solution {
  id: number;
  title: string;
  link: string;
  challengeLink: string;
  level: string;
  publishedAt: string;
}
