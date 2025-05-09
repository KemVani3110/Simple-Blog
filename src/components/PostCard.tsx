import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/PostCard.module.scss";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
  view?: "grid" | "list";
  className?: string;
}

export default function PostCard({
  post,
  view = "grid",
  className = "",
}: PostCardProps) {
  const cardClassName = `${styles.card} ${
    view === "list" ? styles.listView : ""
  } ${className}`;

  return (
    <div className={cardClassName}>
      <Link href={`/posts/${post.slug}`} className={styles.thumbnailLink}>
        <Image
          width={400}
          height={250}
          src={post.featuredImage}
          alt={post.title}
          className={styles.thumbnail}
        />
      </Link>

      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>
            {post.date} - {post.readTime} đọc
          </span>
        </div>
        <div className={styles.author}>
          <Image
            width={50}
            height={50}
            src={post.author.avatar}
            alt={post.author.name}
          />
          <p>
            Viết bởi: <span>{post.author.name}</span>
          </p>
        </div>
        <Link href={`/posts/${post.slug}`} className={styles.readMore}>
          Đọc thêm →
        </Link>
      </div>
    </div>
  );
}
