import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/BackToTop.module.scss";

interface BackToTopProps {
  threshold?: number; // Distance from the top of the page to show the button (300px by default)
}

const BackToTop = ({ threshold = 300 }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Add scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
        setShouldRender(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold]);

  // Handle the animation completion before unmounting
  useEffect(() => {
    if (!isVisible && shouldRender) {
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 400); // match the animation duration
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, shouldRender]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!shouldRender) return null;

  return (
    <button
      className={`${styles.backToTop} ${!isVisible ? styles.hide : ""}`}
      onClick={scrollToTop}
      aria-label="Cuộn lên đầu trang"
    >
      <span className={styles.inner}>
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
    </button>
  );
};

export default BackToTop;
