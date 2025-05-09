import React from "react";
import styles from "@/styles/components/Loading.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface LoadingProps {
  fullPage?: boolean;
  text?: string;
  size?: "small" | "medium" | "large";
}

const Loading: React.FC<LoadingProps> = ({
  fullPage = false,
  text = "Đang tải dữ liệu...",
  size = "medium",
}) => {
  const containerClass = fullPage
    ? `${styles.loadingContainer} ${styles.fullPage}`
    : styles.loadingContainer;

  const spinnerClass = `${styles.spinner} ${styles[size]}`;

  return (
    <div className={containerClass}>
      <div className={styles.loadingContent}>
        <div className={spinnerClass}>
          <FontAwesomeIcon icon={faSpinner} className={styles.spinIcon} />
        </div>
        {text && <p className={styles.loadingText}>{text}</p>}
      </div>
    </div>
  );
};

export default Loading;
