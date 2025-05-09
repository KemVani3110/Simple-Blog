/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticProps } from "next";
import { fetchPosts } from "@/lib/api";
import { Post } from "@/types/post";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import BackToTop from "@/components/BackToTop";
import Loading from "@/components/Loading";
import styles from "@/styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faEye,
  faComment,
  faCheck,
  faSpinner,
  faEnvelope,
  faUsers,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);
  //Loading Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Newsletter state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    null | "success" | "error"
  >(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);

  // Related posts (showing some of the featured posts as related)
  const relatedPosts = featuredPosts.slice(1, 3);

  // Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to the top of the posts section
      document
        .getElementById("latest-posts")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to the top of the posts section
      document
        .getElementById("latest-posts")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the posts section
    document
      .getElementById("latest-posts")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus("error");
      setErrorMessage("Vui lòng nhập email hợp lệ");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Successful subscription
      setSubscriptionStatus("success");
      setEmail("");
    } catch (error) {
      setSubscriptionStatus("error");
      setErrorMessage("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
        setErrorMessage("");
      }, 5000);
    }
  };

  // Function to generate pagination numbers with ellipsis
  const getPaginationNumbers = () => {
    // Maximum page numbers to show at once (not including ellipsis)
    const maxVisiblePages = 5;
    const pages: (number | string)[] = [];

    // Always include first page
    pages.push(1);

    if (totalPages <= maxVisiblePages) {
      // If it has fewer pages than our max, show all of them
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate the range around current page to show
      let rangeStart = Math.max(2, currentPage - 1);
      let rangeEnd = Math.min(totalPages - 1, currentPage + 1);

      // Adjust range to always show maxVisiblePages - 2 pages (excluding first and last)
      if (rangeEnd - rangeStart < maxVisiblePages - 3) {
        if (currentPage < totalPages / 2) {
          // Closer to the start, so extend the range to the right
          rangeEnd = Math.min(totalPages - 1, rangeStart + maxVisiblePages - 3);
        } else {
          // Closer to the end, so extend the range to the left
          rangeStart = Math.max(2, rangeEnd - (maxVisiblePages - 3));
        }
      }

      // Add ellipsis at the beginning if needed
      if (rangeStart > 2) {
        pages.push("...");
      }

      // Add the range pages
      for (let i = rangeStart; i <= rangeEnd; i++) {
        pages.push(i);
      }

      // Add ellipsis at the end if needed
      if (rangeEnd < totalPages - 1) {
        pages.push("...");
      }

      // Always include last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Show loading component while data is loading
  if (isLoading) {
    return <Loading fullPage text="Đang tải trang..." size="large" />;
  }

  return (
    <Layout>
      <Head>
        <title>Trang chủ - Next Blog</title>
        <meta
          name="description"
          content="Trang chủ của đội ngũ Next Blog - Nơi chia sẻ kiến thức và mọi thứ hay ho từ cuộc sống"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Next Blog - Chia sẻ kiến thức công nghệ"
        />
        <meta
          property="og:description"
          content="Nơi chia sẻ kiến thức và mọi thứ hay ho từ cuộc sống"
        />
        <meta property="og:image" content="/images/nextjs.png" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.homeContainer}>
        {/*Hero Heading Section*/}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Chào mừng tới Next Blog!</h1>
            <p>Nơi chia sẻ kiến thức và mọi thứ hay ho từ cuộc sống.</p>
            <div className={styles.heroCta}>
              <Link href="/About" className={styles.primaryButton}>
                Tìm hiểu thêm
              </Link>
              <Link href="/Blogs" className={styles.outlineButton}>
                Xem tất cả bài viết
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/nextjs.png"
                alt="Blog hero"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
        </section>

        {/*Featured Posts Section*/}
        <section className={styles.featuredPosts}>
          <div className={styles.sectionHeader}>
            <h2>Bài viết nổi bật</h2>
            <Link href="/Blogs" className={styles.viewAll}>
              Xem tất cả
            </Link>
          </div>

          <div className={styles.featuredGrid}>
            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`${styles.featuredCard} ${
                  index === 0 ? styles.mainFeature : ""
                }`}
              >
                <PostCard post={post} />
              </div>
            ))}
            <div className={styles.widgetsContainer}>
              <div className={styles.widgetsTopRow}>
                <div className={styles.popularTopics}>
                  <h3>Chủ đề phổ biến</h3>
                  <div className={styles.tagCloud}>
                    <Link href="/tag/nextjs" className={styles.tag}>
                      Next.js
                    </Link>
                    <Link href="/tag/react" className={styles.tag}>
                      React
                    </Link>
                    <Link href="/tag/javascript" className={styles.tag}>
                      JavaScript
                    </Link>
                    <Link href="/tag/typescript" className={styles.tag}>
                      TypeScript
                    </Link>
                    <Link href="/tag/css" className={styles.tag}>
                      CSS
                    </Link>
                    <Link href="/tag/webdev" className={styles.tag}>
                      Web Dev
                    </Link>
                    <Link href="/tag/performance" className={styles.tag}>
                      Performance
                    </Link>
                    <Link href="/tag/design" className={styles.tag}>
                      Design
                    </Link>
                  </div>
                </div>

                <div className={styles.blogStats}>
                  <h3>Thống kê blog</h3>
                  <ul className={styles.statsList}>
                    <li>
                      <span className={styles.statIcon}>
                        <FontAwesomeIcon icon={faNewspaper} />
                      </span>
                      <div className={styles.statInfo}>
                        <span className={styles.statNumber}>
                          {posts.length}
                        </span>
                        <span className={styles.statLabel}>Bài viết</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.statIcon}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      <div className={styles.statInfo}>
                        <span className={styles.statNumber}>10.5k+</span>
                        <span className={styles.statLabel}>Lượt xem</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.statIcon}>
                        <FontAwesomeIcon icon={faComment} />
                      </span>
                      <div className={styles.statInfo}>
                        <span className={styles.statNumber}>230+</span>
                        <span className={styles.statLabel}>Bình luận</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.featuredAuthor}>
                <h3>Tác giả nổi bật</h3>
                <div className={styles.authorCard}>
                  <div className={styles.authorAvatar}>
                    <Image
                      src="/images/ava1.png"
                      alt="Author avatar"
                      width={60}
                      height={60}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Minh Khôi</h4>
                    <p>Web Developer & Technical Writer</p>
                  </div>
                </div>
                <p className={styles.authorBio}>
                  Chuyên gia lỏd về Next.js và React với đang đi thực tập và
                  chưa ra trường.
                </p>
                <Link
                  href="/authors/minh-khoi"
                  className={styles.viewProfileLink}
                >
                  Xem hồ sơ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*Latest Posts Section*/}
        <section id="latest-posts" className={styles.latestPosts}>
          <div className={styles.sectionHeader}>
            <h2>Bài viết mới nhất</h2>
          </div>

          <div className={styles.postsGrid}>
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          {regularPosts.length > postsPerPage && (
            <div className={styles.pagination}>
              <button
                className={`${styles.paginationButton} ${
                  currentPage === 1 ? styles.disabled : ""
                }`}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <div className={styles.pageNumbers}>
                {getPaginationNumbers().map((pageNumber, index) =>
                  pageNumber === "..." ? (
                    <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                      ...
                    </span>
                  ) : (
                    <button
                      key={`page-${pageNumber}`}
                      onClick={() =>
                        typeof pageNumber === "number" && goToPage(pageNumber)
                      }
                      className={`${styles.pageNumber} ${
                        currentPage === pageNumber ? styles.activePage : ""
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                )}
              </div>

              <button
                className={`${styles.paginationButton} ${
                  currentPage === totalPages ? styles.disabled : ""
                }`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
        </section>

        {/* Related Posts Section */}
        <section className={styles.relatedPosts}>
          <div className={styles.sectionHeader}>
            <h2>Có thể bạn quan tâm</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <div key={post.id} className={styles.relatedCard}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </section>

        {/*NewsLetter Section*/}
        <section className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h2>Đăng ký nhận bài viết mới</h2>
            <p>Nhận thông báo khi có bài viết mới và nội dung độc quyền</p>

            <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email của bạn"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.spinnerContainer}>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className={styles.spinner}
                    />
                    Đang đăng ký...
                  </span>
                ) : (
                  "Đăng ký"
                )}
              </button>
            </form>

            {/* Subscription status message */}
            {subscriptionStatus === "success" && (
              <div
                className={styles.statusMessage + " " + styles.successMessage}
              >
                <FontAwesomeIcon icon={faCheck} /> Đăng ký thành công! Cảm ơn
                bạn đã đăng ký.
              </div>
            )}

            {subscriptionStatus === "error" && (
              <div className={styles.statusMessage + " " + styles.errorMessage}>
                {errorMessage}
              </div>
            )}
          </div>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutUs}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutInfo}>
              <h2>Về Next Blog</h2>
              <p>
                Next Blog là nơi chia sẻ kiến thức chuyên sâu về lập trình web,
                các công nghệ mới nhất và những kinh nghiệm thực tế trong ngành
                công nghệ thông tin.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={styles.aboutIcon}
                  />
                  <div>
                    <span className={styles.statValue}>2023</span>
                    <span className={styles.statLabel}>Năm thành lập</span>
                  </div>
                </div>
                <div className={styles.aboutStat}>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className={styles.aboutIcon}
                  />
                  <div>
                    <span className={styles.statValue}>5+</span>
                    <span className={styles.statLabel}>Thành viên</span>
                  </div>
                </div>
              </div>
              <Link href="/About" className={styles.outlineButton}>
                Xem thêm về chúng tôi
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/images/nextjs.png"
                alt="Next Blog Team"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>
        <BackToTop threshold={300} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return {
    props: { posts },
  };
};
