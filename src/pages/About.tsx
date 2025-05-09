import styles from "@/styles/components/About.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBook,
  faPen,
  faUsers,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Add animation delay to simulate loading and show animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const foundingDate = "2023";
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - parseInt(foundingDate);

  // Show loading component while data is loading
  if (loading) {
    return <Loading fullPage text="Đang tải trang..." size="large" />;
  }
  return (
    <>
      <Head>
        <title>Giới thiệu - Next Blog</title>
        <meta
          name="description"
          content="Thông tin về Next Blog và đội ngũ phát triển của chúng tôi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className={`${styles.aboutPage} ${
          loading ? styles.loading : styles.loaded
        }`}
      >
        <div className="container">
          {/*Hero Heading Section*/}
          <section className={`${styles.hero} ${styles.animateItem}`}>
            <h1>Về Next Blog</h1>
            <p>Nơi chia sẻ kiến thức và đam mê</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Bài viết</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10k+</span>
                <span className={styles.statLabel}>Độc giả</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{yearsActive}</span>
                <span className={styles.statLabel}>Năm hoạt động</span>
              </div>
            </div>
          </section>

          {/*About Content Section*/}
          <section
            className={`${styles.aboutContent} ${styles.animateItem}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/nextjs.png"
                  alt="Đội ngũ Next Blog"
                  width={600}
                  height={400}
                  className={styles.aboutImage}
                />
              </div>
            </div>

            <div className={styles.textContent}>
              <h2>Câu chuyện của chúng tôi</h2>
              <p>
                Next Blog được thành lập vào năm 2023 với mục tiêu tạo ra một
                không gian chia sẻ kiến thức và kinh nghiệm về công nghệ, lập
                trình và thiết kế web. Chúng tôi tin rằng việc chia sẻ kiến thức
                là cách tốt nhất để phát triển cộng đồng và giúp đỡ những người
                mới bắt đầu.
              </p>
              <p>
                Với đội ngũ gồm các chuyên gia trong nhiều lĩnh vực khác nhau,
                chúng tôi luôn nỗ lực mang đến những bài viết chất lượng, cập
                nhật các xu hướng mới nhất trong thế giới công nghệ và phát
                triển web.
              </p>
              <div className={styles.milestones}>
                <h3>
                  <FontAwesomeIcon icon={faCalendarAlt} /> Những cột mốc quan
                  trọng
                </h3>
                <ul>
                  <li>
                    <strong>2023:</strong> Thành lập Next Blog
                  </li>
                  <li>
                    <strong>2023:</strong> Đạt 1,000 độc giả đầu tiên
                  </li>
                  <li>
                    <strong>2024:</strong> Mở rộng đội ngũ lên 10 thành viên
                  </li>
                  <li>
                    <strong>2024:</strong> Ra mắt phiên bản mới với nhiều tính
                    năng hơn
                  </li>
                  <li>
                    <strong>2025:</strong> Đạt 10,000+ độc giả thường xuyên
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/*Team Values Section*/}
          <section
            className={`${styles.values} ${styles.animateItem}`}
            style={{ animationDelay: "200ms" }}
          >
            <h2>Giá trị cốt lõi</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3>Đổi mới</h3>
                <p>
                  Chúng tôi không ngừng tìm kiếm những ý tưởng và công nghệ mới
                  để chia sẻ với cộng đồng.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <h3>Học hỏi</h3>
                <p>
                  Chúng tôi tin rằng việc học tập là hành trình không bao giờ
                  kết thúc, và chúng tôi luôn sẵn sàng học hỏi.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <h3>Chất lượng</h3>
                <p>
                  Mỗi bài viết đều được nghiên cứu kỹ lưỡng và biên tập cẩn thận
                  để đảm bảo tính chính xác và hữu ích.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3>Cộng đồng</h3>
                <p>
                  Chúng tôi xây dựng một cộng đồng mạnh mẽ và hỗ trợ lẫn nhau
                  trong hành trình phát triển.
                </p>
              </div>
            </div>
          </section>

          {/*Team Section*/}
          <section
            className={`${styles.team} ${styles.animateItem}`}
            style={{ animationDelay: "300ms" }}
          >
            <h2>Đội ngũ của chúng tôi</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image
                    src="/images/ava1.png"
                    alt="Nguyễn Văn A"
                    width={200}
                    height={200}
                  />
                </div>
                <h3>Huỳnh Chu Minh Khôi</h3>
                <p>Founder & CEO</p>
                <div className={styles.memberSocial}>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
                  </div>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
                  </div>
                </div>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image
                    src="/images/ava1.png"
                    alt="Trần Thị B"
                    width={200}
                    height={200}
                  />
                </div>
                <h3>Huỳnh Chu Minh Khôi</h3>
                <p>Lead Developer</p>
                <div className={styles.memberSocial}>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
                  </div>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
                  </div>
                </div>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image
                    src="/images/ava1.png"
                    alt="Lê Văn C"
                    width={200}
                    height={200}
                  />
                </div>
                <h3>Huỳnh Chu Minh Khôi</h3>
                <p>Content Editor</p>
                <div className={styles.memberSocial}>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
                  </div>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
                  </div>
                </div>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image
                    src="/images/ava1.png"
                    alt="Phạm Thị D"
                    width={200}
                    height={200}
                  />
                </div>
                <h3>Huỳnh Chu Minh Khôi</h3>
                <p>UX/UI Designer</p>
                <div className={styles.memberSocial}>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" />
                  </div>
                  <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
