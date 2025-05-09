/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { Post } from "@/types/post";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import BackToTop from "@/components/BackToTop";
import Loading from "@/components/Loading";
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
  faFilter,
  faSortAmountDown,
  faSortAmountUp,
  faTimes,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faCss3,
  faSass,
  faJs,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";
import { fetchPosts } from "@/lib/api";

interface BlogsPageProps {
  posts: Post[];
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  //Loading and Animation sequence
  useEffect(() => {
    //Initial loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 3500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  // Extract all unique tags from posts
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter and sort posts
  const filteredPosts = posts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
    setSortOrder("newest");
  };

  // Toggle mobile filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Show loading component while data is loading
  if (isLoading) {
    return <Loading fullPage text="Đang tải trang..." size="large" />;
  }

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
        {/*Hero Header*/}
        <div className={styles.pageHeader}>
          <h1>Tất cả bài viết</h1>
          <p>
            Khám phá các bài viết về lập trình, công nghệ và nhiều chủ đề khác
          </p>
          <div className={styles.postStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{posts.length}</span>
              <span className={styles.statLabel}>Bài viết</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{allTags.length}</span>
              <span className={styles.statLabel}>Chủ đề</span>
            </div>
          </div>
        </div>

        {/*Mobile Filter Toggle*/}
        <button
          className={styles.mobileFilterToggle}
          onClick={toggleFilters}
          aria-expanded={showFilters}
        >
          <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />
          Bộ lọc {showFilters ? "▲" : "▼"}
        </button>

        {/*Filter Section*/}
        <div
          className={`${styles.filterSection} ${
            showFilters ? styles.showFilters : ""
          }`}
        >
          <div className={styles.filterTopSection}>
            {/* Search Box */}
            <div className={styles.searchBox}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  className={styles.clearSearch}
                  onClick={() => setSearchQuery("")}
                  aria-label="Xóa tìm kiếm"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className={styles.filterControls}>
              <div className={styles.sortControl}>
                <button
                  className={styles.sortButton}
                  onClick={() =>
                    setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
                  }
                  aria-label={
                    sortOrder === "newest"
                      ? "Sắp xếp từ mới đến cũ"
                      : "Sắp xếp từ cũ đến mới"
                  }
                >
                  <FontAwesomeIcon
                    icon={
                      sortOrder === "newest" ? faSortAmountDown : faSortAmountUp
                    }
                    className={styles.sortIcon}
                  />
                  {sortOrder === "newest" ? "Mới nhất" : "Cũ nhất"}
                </button>
              </div>

              <div className={styles.viewControl}>
                <button
                  className={`${styles.viewButton} ${
                    viewMode === "grid" ? styles.active : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Xem dạng lưới"
                >
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className={styles.viewIcon}
                  />
                </button>
                <button
                  className={`${styles.viewButton} ${
                    viewMode === "list" ? styles.active : ""
                  }`}
                  onClick={() => setViewMode("list")}
                  aria-label="Xem dạng danh sách"
                >
                  <FontAwesomeIcon icon={faList} className={styles.viewIcon} />
                </button>
              </div>
            </div>
          </div>

          {/* Tags Container */}
          <div className={styles.tagsContainer}>
            <div className={styles.tagsHeader}>
              <FontAwesomeIcon icon={faTags} className={styles.headerIcon} />
              <h3>Chủ đề:</h3>
              {selectedTag && (
                <button
                  className={styles.clearTagsButton}
                  onClick={() => setSelectedTag(null)}
                  aria-label="Xóa chọn chủ đề"
                >
                  Xóa
                </button>
              )}
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

          {(searchQuery || selectedTag || sortOrder !== "newest") && (
            <button
              className={styles.clearFiltersButton}
              onClick={clearFilters}
            >
              <FontAwesomeIcon icon={faTimes} className={styles.clearIcon} />
              Xóa bộ lọc
            </button>
          )}
        </div>
        <div className={styles.filterInfo}>
           <span>Hiển thị {filteredPosts.length} bài viết</span>
        </div>

        {/*Loading*/}
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
            <p>Đang tải bài viết...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div
            className={`${styles.postsContainer} ${
              viewMode === "list" ? styles.listView : ""
            }`}
          >
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                view={viewMode}
                className={styles.postCard}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <FontAwesomeIcon icon={faSearch} className={styles.noResultsIcon} />
            <p>Không tìm thấy bài viết phù hợp.</p>
            <button className={styles.resetButton} onClick={clearFilters}>
              Xóa tất cả bộ lọc
            </button>
          </div>
        )}
        <BackToTop threshold={300} />
      </div>
    </Layout>
  );
}

// Helper function to get Font Awesome icons for common tags
function getTagIcon(tag: string) {
  const tagIcons: Record<string, any> = {
    React: faReact,
    "Next.js": faReact,
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
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};
