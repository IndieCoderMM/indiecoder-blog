import { Category, CoverImage, Post, Solution } from '@/common.types';

export const categories: Category[] = [
  {
    name: 'Web Development',
    slug: 'web-development',
  },
  {
    name: 'Data Science',
    slug: 'data-science',
  },
  {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
  },
];

export const coverImages: CoverImage[] = [
  {
    url: '/blog_cover.png',
  },
  {
    url: '/blog_cover.png',
  },
  {
    url: '/blog_cover.png',
  },
];

export const posts: Post[] = [
  {
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    excerpt: 'Learn the basics of React and start building web applications.',
    content: 'This is the full content of the post...',
    language: 'English',
    publishedAt: '2022-01-10',
    categories: [categories[0]],
    coverImage: coverImages[0],
  },
  {
    title: 'Introduction to Machine Learning',
    slug: 'introduction-to-machine-learning',
    excerpt:
      'Discover the fundamentals of machine learning and its applications.',
    content: 'This is the full content of the post...',
    language: 'English',
    publishedAt: '2022-02-15',
    categories: [categories[1]],
    coverImage: coverImages[1],
  },
  {
    title: 'Building a Mobile App with React Native',
    slug: 'building-a-mobile-app-with-react-native',
    excerpt:
      'Learn how to create cross-platform mobile apps using React Native.',
    content: 'This is the full content of the post...',
    language: 'English',
    publishedAt: '2022-03-20',
    categories: [categories[2]],
    coverImage: coverImages[2],
  },
];

export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Two Sum',
    link: 'https://leetcode.com/problems/two-sum/',
    challengeLink:
      'https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/',
    level: 'Easy',
    publishedAt: '2022-03-15',
  },
  {
    id: 2,
    title: 'Reverse Linked List',
    link: 'https://leetcode.com/problems/reverse-linked-list/',
    challengeLink:
      'https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/',
    level: 'Easy',
    publishedAt: '2022-04-02',
  },
  {
    id: 3,
    title: 'Binary Tree Inorder Traversal',
    link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
    challengeLink:
      'https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/',
    level: 'Medium',
    publishedAt: '2022-05-10',
  },
  {
    id: 4,
    title: 'Merge Intervals',
    link: 'https://leetcode.com/problems/merge-intervals/',
    challengeLink:
      'https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/',
    level: 'Medium',
    publishedAt: '2022-06-22',
  },
  {
    id: 5,
    title: 'Longest Increasing Subsequence',
    link: 'https://leetcode.com/problems/longest-increasing-subsequence/',
    challengeLink:
      'https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/',
    level: 'Hard',
    publishedAt: '2022-07-30',
  },
];
