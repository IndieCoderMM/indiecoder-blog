import fs from 'fs';
import { PostMetaData } from '@/common.types';
import matter from 'gray-matter';

const getPostMetaData = (): PostMetaData[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const content = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(content);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetaData;
