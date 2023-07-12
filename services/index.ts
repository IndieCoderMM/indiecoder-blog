import { Category, Post } from '@/common.types';
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface PostsConnection {
  postsConnection: {
    edges: {
      node: Post;
    }[];
  };
}

interface Categories {
  categories: Category[];
}

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            publishedAt
            slug
            title
            excerpt
            content
            categories {
              name
              slug
            }
            coverImage {
              url
            }
            externalLink
            language
            originalDate
          }
        }
      }
    }
  `;

  const result = await request<PostsConnection>(graphqlAPI, query);

  return result.postsConnection.edges.map((e) => e.node);
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        publishedAt
        originalDate
        slug
        title
        excerpt
        content
        language
        categories {
          name
          slug
        }
        coverImage {
          url
        }
      }
    }
  `;

  const result = await request<{ post: Post }>(graphqlAPI, query, { slug });

  return result.post;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request<Categories>(graphqlAPI, query);

  return result.categories;
};
