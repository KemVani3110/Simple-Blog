/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import { Post } from "@/types/post";
import { fetchPosts } from "@/lib/api";
import styles from "@/styles/components/PostDetail.module.scss";
import Head from "next/head";

interface Props {
  post: Post;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const PostDetail: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  const formattedDate = new Date(post.date).toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
      </Head>

      <article className={styles.blogPost}>
        {post.featuredImage && (
          <div className={styles.featuredImageContainer}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              className={styles.featuredImage}
              width={800}
              height={400}
              priority
            />
          </div>
        )}

        <header className={styles.postHeader}>
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
              {formattedDate} · {post.readTime} phút đọc
            </p>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className={styles.tagContainer}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.navigation}>
          <Link href="/Blogs" className={styles.backLink}>
            ← Trở về trang danh sách bài viết
          </Link>
        </div>
      </article>
    </>
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
