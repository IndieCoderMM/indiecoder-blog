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
