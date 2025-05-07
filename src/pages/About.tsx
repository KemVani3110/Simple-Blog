import styles from "@/styles/components/About.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faBook, faPen, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Giới thiệu - Next Blog</title>
        <meta name="description" content="Thông tin về Next Blog và đội ngũ phát triển của chúng tôi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.aboutPage}>
        <div className="container">
          <section className={styles.hero}>
            <h1>Về Next Blog</h1>
            <p>Nơi chia sẻ kiến thức và đam mê</p>
          </section>

          <section className={styles.aboutContent}>
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
                Next Blog được thành lập vào năm 2023 với mục tiêu tạo ra một không gian chia sẻ kiến thức và 
                kinh nghiệm về công nghệ, lập trình và thiết kế web. Chúng tôi tin rằng việc chia sẻ 
                kiến thức là cách tốt nhất để phát triển cộng đồng và giúp đỡ những người mới bắt đầu.
              </p>
              <p>
                Với đội ngũ gồm các chuyên gia trong nhiều lĩnh vực khác nhau, chúng tôi luôn nỗ lực mang đến 
                những bài viết chất lượng, cập nhật các xu hướng mới nhất trong thế giới công nghệ và 
                phát triển web.
              </p>
            </div>
          </section>

          <section className={styles.values}>
            <h2>Giá trị cốt lõi</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3>Đổi mới</h3>
                <p>Chúng tôi không ngừng tìm kiếm những ý tưởng và công nghệ mới để chia sẻ với cộng đồng.</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <h3>Học hỏi</h3>
                <p>Chúng tôi tin rằng việc học tập là hành trình không bao giờ kết thúc, và chúng tôi luôn sẵn sàng học hỏi.</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <h3>Chất lượng</h3>
                <p>Mỗi bài viết đều được nghiên cứu kỹ lưỡng và biên tập cẩn thận để đảm bảo tính chính xác và hữu ích.</p>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3>Cộng đồng</h3>
                <p>Chúng tôi xây dựng một cộng đồng mạnh mẽ và hỗ trợ lẫn nhau trong hành trình phát triển.</p>
              </div>
            </div>
          </section>

          <section className={styles.team}>
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
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}