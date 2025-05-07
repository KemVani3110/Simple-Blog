import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/404.module.scss';

export default function Custom404() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    // Update countdown every second
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Clean up timers
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <div className={styles.clip}>
            <div className={styles.paper}>
              <div className={styles.face}>
                <div className={styles.eyes}>
                  <div className={`${styles.eye} ${styles.eyeLeft}`}></div>
                  <div className={`${styles.eye} ${styles.eyeRight}`}></div>
                </div>
                <div className={`${styles.rosyCheeks} ${styles.rosyCheeksLeft}`}></div>
                <div className={`${styles.rosyCheeks} ${styles.rosyCheeksRight}`}></div>
                <div className={styles.mouth}></div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className={styles.title}>4<span className={styles.titleAccent}>0</span>4</h1>
        <h2 className={styles.subtitle}>Trang không tìm thấy</h2>
        <p className={styles.message}>
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ width: `${countdown * 20}%` }}></div>
        </div>
        <p className={styles.countdown}>
          Tự động chuyển hướng về trang chủ sau <span className={styles.timer}>{countdown}</span> giây
        </p>
        
        <div className={styles.actions}>
          <button
            onClick={() => router.back()}
            className={styles.backButton}
          >
            <span className={styles.buttonIcon}>←</span> Quay lại
          </button>
          
          <Link href="/" className={styles.homeButton}>
            Về trang chủ <span className={styles.buttonIcon}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}