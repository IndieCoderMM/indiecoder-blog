import { Category, Post, Project, Solution } from '@/common.types';
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

interface Solutions {
  solutions: Solution[];
}

interface Projects {
  projectsConnection: {
    edges: {
      node: Project;
    }[];
  };
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

export const getSolutions = async () => {
  const query = gql`
    query GetSolutions {
      solutions(orderBy: publishedAt_DESC) {
        title
        publishedAt
        link
        challengeLink
        id
        level
      }
    }
  `;

  const result = await request<Solutions>(graphqlAPI, query);
  return result.solutions;
};

export const getProjects = async () => {
  const query = gql`
    query GetProjects {
      projectsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            category {
              slug
              name
            }
            description
            id
            language
            publishedAt
            repoLink
            starCount
            title
          }
        }
      }
    }
  `;
  const result = await request<Projects>(graphqlAPI, query);
  return result.projectsConnection.edges.map((e) => e.node);
};
