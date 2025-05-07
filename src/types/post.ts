export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    date: string;
    readTime: number;
    author: {
      name: string;
      avatar: string;
    };
    tags: string[];
  }
  