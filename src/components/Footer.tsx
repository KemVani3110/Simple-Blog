import styles from "@/styles/components/Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Next Blog</h3>
            <p className={styles.footerDesc}>
              Chia sẻ kiến thức, kinh nghiệm về công nghệ, lập trình và thiết kế web.
              Cùng nhau học hỏi và phát triển.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Links Nhanh</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>
                <Link href="/Blogs">Bài viết</Link>
              </li>
              <li>
                <Link href="/About">Giới thiệu</Link>
              </li>
              <li>
                <Link href="/Contact">Liên hệ</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Chủ Đề</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/category/web-development">Phát triển Web</Link>
              </li>
              <li>
                <Link href="/category/frontend">Frontend</Link>
              </li>
              <li>
                <Link href="/category/backend">Backend</Link>
              </li>
              <li>
                <Link href="/category/ux-ui">UX/UI Design</Link>
              </li>
              <li>
                <Link href="/category/seo">SEO</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Liên Hệ</h3>
            <ul className={styles.contactInfo}>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>123 Đường ABC, Quận 5, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+84 (0) 123 456 789</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>contact@nextblog.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Next Blog. Tất cả các quyền được bảo lưu.</p>
          <p>
            Thiết kế và phát triển bởi{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Đội ngũ Next Blog
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}