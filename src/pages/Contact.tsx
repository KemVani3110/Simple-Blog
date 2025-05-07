import styles from "@/styles/components/Contact.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Vui lòng điền đầy đủ thông tin bắt buộc",
        type: "error",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: "Cảm ơn! Tin nhắn của bạn đã được gửi thành công.",
        type: "success",
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Delete message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: "",
          type: null,
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Liên hệ - Next Blog</title>
        <meta name="description" content="Liên hệ với đội ngũ Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.contactPage}>
        <div className="container">
          <section className={styles.hero}>
            <h1>Liên hệ với chúng tôi</h1>
            <p>Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn</p>
          </section>

          <section className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Thông tin liên hệ</h2>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.infoText}>
                  <h3>Địa chỉ</h3>
                  <p>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.infoText}>
                  <h3>Điện thoại</h3>
                  <p>+84 (0) 123 456 789</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.infoText}>
                  <h3>Email</h3>
                  <p>contact@nextblog.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={styles.infoText}>
                  <h3>Giờ làm việc</h3>
                  <p>Thứ Hai - Thứ Sáu: 9:00 - 17:00</p>
                  <p>Thứ Bảy: 9:00 - 12:00</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3>Kết nối với chúng tôi</h3>
                <div className={styles.socialIcons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Gửi tin nhắn cho chúng tôi</h2>

              {formStatus.message && (
                <div
                  className={`${styles.formMessage} ${
                    styles[formStatus.type || ""]
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    Họ tên <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Tiêu đề</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Nhập tiêu đề tin nhắn"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    Nội dung <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập nội dung tin nhắn của bạn"
                    rows={6}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Gửi tin nhắn</span>
                </button>
              </form>
            </div>
          </section>

          <section className={styles.mapSection}>
            <h2>Bản đồ</h2>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <p>Bản đồ sẽ được hiển thị ở đây nè.</p>
              </div>
            </div>
          </section>

          <section className={styles.faq}>
            <h2>Câu hỏi thường gặp</h2>

            <div className={styles.faqItem}>
              <h3>1. Làm thế nào để đăng ký nhận bản tin từ Next Blog?</h3>
              <p>
                Bạn có thể đăng ký nhận bản tin bằng cách điền email của bạn vào
                form đăng ký ở cuối trang chủ hoặc liên hệ trực tiếp với chúng
                tôi qua form liên hệ ở trên.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>2. Tôi có thể đóng góp bài viết cho Next Blog không?</h3>
              <p>
                Chúng tôi luôn chào đón những cộng tác viên mới. Hãy gửi email
                cho chúng tôi theo địa chỉ contribute@nextblog.com để biết thêm
                chi tiết.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>3. Next Blog có cung cấp dịch vụ tư vấn không?</h3>
              <p>
                Có, chúng tôi cung cấp dịch vụ tư vấn về phát triển web, thiết
                kế UX/UI và chiến lược nội dung. Vui lòng liên hệ với chúng tôi
                để biết thêm chi tiết.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
