import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import { Post } from "@/types/post";
import { fetchPosts } from "@/lib/api";
import styles from "@/styles/components/PostDetail.module.scss";

interface Props {
  post: Post;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const PostDetail: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Đang tải bài viết...</p>;
  }

  return (
    <article className={styles.blogPost}>
      <header className={styles.postHeader}>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <h1>{post.title}</h1>
      </header>

      <div className={styles.postContent}>
        <Image
          width={60}
          height={60}
          src={post.author.avatar}
          alt={post.author.name}
        />
        <div>
          <p>{post.author.name}</p>
          <p>
            {post.date} - {post.readTime} đọc
          </p>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link href="/Blogs" className={styles.backLink}>
        ← Trở về trang danh sách bài viết
      </Link>
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 60,
  };
};

export default PostDetail;
