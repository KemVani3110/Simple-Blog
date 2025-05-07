import { GetStaticProps } from "next";
import { fetchPosts } from "@/lib/api";
import { Post } from "@/types/post";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import styles from "@/styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const featuredPosts = posts.slice(0, 3);
  const regularPosts = posts.slice(3);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  
  // Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className={styles.homeContainer}>
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
        
        <section className={styles.featuredPosts}>
          <div className={styles.sectionHeader}>
            <h2>Bài viết nổi bật</h2>
            <Link href="/Blogs" className={styles.viewAll}>
              Xem tất cả
            </Link>
          </div>
          
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post, index) => (
              <div key={post.id} className={`${styles.featuredCard} ${index === 0 ? styles.mainFeature : ''}`}>
                <PostCard post={post} />
              </div>
            ))}
            <div className={styles.widgetsContainer}>
              <div className={styles.widgetsTopRow}>
                <div className={styles.popularTopics}>
                  <h3>Chủ đề phổ biến</h3>
                  <div className={styles.tagCloud}>
                    <Link href="/tag/nextjs" className={styles.tag}>Next.js</Link>
                    <Link href="/tag/react" className={styles.tag}>React</Link>
                    <Link href="/tag/javascript" className={styles.tag}>JavaScript</Link>
                    <Link href="/tag/typescript" className={styles.tag}>TypeScript</Link>
                    <Link href="/tag/css" className={styles.tag}>CSS</Link>
                    <Link href="/tag/webdev" className={styles.tag}>Web Dev</Link>
                    <Link href="/tag/performance" className={styles.tag}>Performance</Link>
                    <Link href="/tag/design" className={styles.tag}>Design</Link>
                  </div>
                </div>
                
                <div className={styles.blogStats}>
                  <h3>Thống kê blog</h3>
                  <ul className={styles.statsList}>
                    <li>
                      <span className={styles.statIcon}>📝</span>
                      <div className={styles.statInfo}>
                        <span className={styles.statNumber}>{posts.length}</span>
                        <span className={styles.statLabel}>Bài viết</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.statIcon}>👁️</span>
                      <div className={styles.statInfo}>
                        <span className={styles.statNumber}>10.5k+</span>
                        <span className={styles.statLabel}>Lượt xem</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.statIcon}>💬</span>
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
                  Chuyên gia lỏd về Next.js và React với hơn 1 năm mới ra trường.
                </p>
                <Link href="/authors/minh-nguyen" className={styles.viewProfileLink}>
                  Xem hồ sơ
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.latestPosts}>
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
                className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                &laquo; Trang trước
              </button>
              
              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`${styles.pageNumber} ${currentPage === pageNumber ? styles.activePage : ''}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
              
              <button 
                className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Trang sau &raquo;
              </button>
            </div>
          )}
        </section>
        
        <section className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h2>Đăng ký nhận bài viết mới</h2>
            <p>Nhận thông báo khi có bài viết mới và nội dung độc quyền</p>
            
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Email của bạn" required />
              <button type="submit" className={styles.primaryButton}>Đăng ký</button>
            </form>
          </div>
        </section>
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