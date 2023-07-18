export interface Category {
  name: string;
  slug: string;
}

export interface CoverImage {
  url: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  language: string;
  originalDate: string;
  externalLink?: string;
  categories: Category[];
  coverImage: CoverImage;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  repoLink: string;
  category: Category;
  starCount: number;
}

export interface Solution {
  id: number;
  title: string;
  link: string;
  challengeLink: string;
  level: string;
  publishedAt: string;
}
