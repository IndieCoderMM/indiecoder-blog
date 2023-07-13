import { Post } from '@/common.types';

const sortPostsByDate = (posts: Post[]) => {
  posts.sort((a, b) => {
    const dateA = new Date(a.originalDate || a.publishedAt);
    const dateB = new Date(b.originalDate || b.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
};

export default sortPostsByDate;
