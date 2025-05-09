/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@/styles/components/Contact.module.scss";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faChevronDown,
  faChevronUp,
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

  type FormStatus = {
    message: string;
    type: "success" | "error" | null;
  };

  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    type: null,
  });

  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set loading to false after delay to simulate page loading
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      // Apply animation classes after loading is complete
      setPageLoaded(true);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!mounted || isLoading) {
    return <Loading fullPage text="Đang tải trang..." size="large" />;
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

    //Form submission real-life simulation
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

  const toggleFaq = (index: any) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqItems = [
    {
      question: "Làm thế nào để đăng ký nhận bản tin từ Next Blog?",
      answer:
        "Bạn có thể đăng ký nhận bản tin bằng cách điền email của bạn vào form đăng ký ở cuối trang chủ hoặc liên hệ trực tiếp với chúng tôi qua form liên hệ ở trên.",
    },
    {
      question: "Tôi có thể đóng góp bài viết cho Next Blog không?",
      answer:
        "Chúng tôi luôn chào đón những cộng tác viên mới. Hãy gửi email cho chúng tôi theo địa chỉ contribute@nextblog.com để biết thêm chi tiết.",
    },
    {
      question: "Next Blog có cung cấp dịch vụ tư vấn không?",
      answer:
        "Có, chúng tôi cung cấp dịch vụ tư vấn về phát triển web, thiết kế UX/UI và chiến lược nội dung. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.",
    },
    {
      question: "Làm thế nào để báo cáo một bài viết vi phạm?",
      answer:
        "Bạn có thể báo cáo bài viết vi phạm bằng cách sử dụng nút 'Báo cáo' ở cuối mỗi bài viết hoặc gửi email đến report@nextblog.com với chi tiết về bài viết đó.",
    },
    {
      question: "Hiện tại Blog có hỗ trợ ngôn ngữ nào?",
      answer:
        " Hiện tại, Next Blog chỉ hỗ trợ tiếng Việt. Chúng tôi đang làm việc để mở rộng hỗ trợ cho nhiều ngôn ngữ hơn.",
    },
  ];

  return (
    <>
      <Head>
        <title>Liên hệ - Next Blog</title>
        <meta name="description" content="Liên hệ với đội ngũ Next Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className={`${styles.contactPage} ${
          pageLoaded ? styles.pageLoaded : ""
        }`}
      >
        <div className="container">
          {/*Heading Section*/}
          <section
            className={`${styles.hero} ${pageLoaded ? styles.fadeInDown : ""}`}
          >
            <h1>Liên hệ với chúng tôi</h1>
            <p>Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn</p>
          </section>

          {/*Contact Content Section*/}
          <section className={styles.contactContent}>
            <div
              className={`${styles.contactInfo} ${
                pageLoaded ? styles.fadeInLeft : ""
              }`}
            >
              <h2>Thông tin liên hệ</h2>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.infoText}>
                  <h3>Địa chỉ</h3>
                  <p>123 Đường ABC, Quận 5, TP. Hồ Chí Minh</p>
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
                    className={styles.pulseIcon}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pulseIcon}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pulseIcon}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pulseIcon}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`${styles.contactForm} ${
                pageLoaded ? styles.fadeInRight : ""
              }`}
            >
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
                    className={styles.formInput}
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
                    className={styles.formInput}
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
                    className={styles.formInput}
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
                    className={styles.formTextarea}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Gửi tin nhắn</span>
                </button>
              </form>
            </div>
          </section>

          {/*Map Section*/}
          <section
            className={`${styles.mapSection} ${
              pageLoaded ? styles.fadeInUp : ""
            }`}
          >
            <h2>Bản đồ</h2>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <p>Bản đồ sẽ được hiển thị ở đây.</p>
              </div>
            </div>
          </section>

          {/*FAQ Section*/}
          <section
            className={`${styles.faq} ${pageLoaded ? styles.fadeInUp : ""}`}
          >
            <h2>Câu hỏi thường gặp</h2>

            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  expandedFaq === index ? styles.faqExpanded : ""
                }`}
              >
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{item.question}</h3>
                  <span className={styles.faqToggle}>
                    <FontAwesomeIcon
                      icon={expandedFaq === index ? faChevronUp : faChevronDown}
                    />
                  </span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    expandedFaq === index ? styles.faqAnswerVisible : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
