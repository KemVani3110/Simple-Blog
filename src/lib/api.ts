import { Post } from '@/types/post';

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`);
  return await res.json();
}

export async function fetchPostById(id: string): Promise<Post | undefined> {
  const posts = await fetchPosts();
  return posts.find((post: Post) => post.id === id);
}
