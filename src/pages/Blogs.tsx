/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from "next";
import { useState } from "react";
import { Post } from "@/types/post";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import styles from "@/styles/components/Blogs.module.scss";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTags,
  faSync,
  faCode,
  faServer,
  faPlug,
  faPalette,
  faBolt,
  faBook,
  faMobile,
  faFile,
  faImage,
  faLayerGroup,
  faCog,
  faPhone,
  faRocket,
  faLock,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faCss3,
  faSass,
  faJs,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";

interface BlogsPageProps {
  posts: Post[];
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags from posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search query and selected tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <Head>
        <title>Tất cả bài viết | Next Blog</title>
        <meta
          name="description"
          content="Danh sách tất cả bài viết trên Next Blog"
        />
      </Head>

      <div className={styles.blogsContainer}>
        <div className={styles.pageHeader}>
          <h1>Tất cả bài viết</h1>
          <p>
            Khám phá các bài viết về lập trình, công nghệ và nhiều chủ đề khác
          </p>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.tagsContainer}>
            <div className={styles.tagsHeader}>
              <FontAwesomeIcon icon={faTags} className={styles.headerIcon} />
              <h3>Chủ đề:</h3>
            </div>
            <div className={styles.tagsFilter}>
              <button
                className={`${styles.tagBtn} ${
                  selectedTag === null ? styles.active : ""
                }`}
                onClick={() => setSelectedTag(null)}
              >
                <FontAwesomeIcon icon={faSync} className={styles.tagIcon} />
                Tất cả
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.tagBtn} ${
                    selectedTag === tag ? styles.active : ""
                  }`}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                >
                  <FontAwesomeIcon
                    icon={getTagIcon(tag)}
                    className={styles.tagIcon}
                  />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <FontAwesomeIcon icon={faSearch} className={styles.noResultsIcon} />
            <p>Không tìm thấy bài viết phù hợp.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Helper function to get Font Awesome icons for common tags
function getTagIcon(tag: string) {
  const tagIcons: Record<string, any> = {
    React: faReact,
    "Next.js": faReact, // Use React icon for Next.js
    JavaScript: faJs,
    TypeScript: faCode,
    Frontend: faCode,
    Backend: faServer,
    API: faPlug,
    CSS: faCss3,
    SCSS: faSass,
    Performance: faBolt,
    SEO: faSearch,
    Tutorial: faBook,
    UI: faPalette,
    UX: faPalette,
    Responsive: faMobile,
    SSR: faSync,
    SSG: faFile,
    Markdown: faMarkdown,
    Image: faImage,
    "Full-stack": faLayerGroup,
    Fullstack: faLayerGroup,
    Configuration: faCog,
    Marketing: faPhone,
    "Web Performance": faRocket,
    Typescript: faCode,
    "Font Awesome": faFont,
    "Environment Variables": faLock,
    "Static Generation": faFile,
  };

  return tagIcons[tag] || faTags; // Default to tags icon
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/posts`
  );
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};
