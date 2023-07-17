import { Post } from '@/common.types';

/**
 * Sort an array of posts by date in descending order
 * @param {Post[]} posts - An array of Post objects with either 'originalDate' or 'publishedAt'
 * @returns {Post[]} A new sorted array of posts in descending date order
 */
const sortPostsByDate = (posts: Post[]): Post[] => {
  const sortedPosts = [...posts];

  sortedPosts.sort((a, b) => {
    const dateA = new Date(a.originalDate ?? a.publishedAt);
    const dateB = new Date(b.originalDate ?? b.publishedAt);

    // Handle cases where dateA or dateB is Invalid Date
    if (isNaN(dateA.getTime())) return 1;
    if (isNaN(dateB.getTime())) return -1;

    return dateB.getTime() - dateA.getTime();
  });

  return sortedPosts;
};

export default sortPostsByDate;
