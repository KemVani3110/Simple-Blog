import styles from "@/styles/components/Navbar.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faBlog, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const current = stored || "light";
    setTheme(current);
    document.body.setAttribute("data-theme", current);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <FontAwesomeIcon icon={faBlog} />
          <span>Next Blog</span>
        </Link>
        <ul className={styles.navLinks}>
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
            <button onClick={toggleTheme} className={styles.toggleBtn}>
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </li>
        </ul>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        {mobileMenuOpen && (
          <div
            className={`${styles.mobileMenu} ${
              mobileMenuOpen ? styles.active : ""
            }`}
            data-theme={theme}
          >
            <ul>
              <li>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/Blogs" onClick={() => setMobileMenuOpen(false)}>
                  Bài viết
                </Link>
              </li>
              <li>
                <Link href="/About" onClick={() => setMobileMenuOpen(false)}>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/Contact" onClick={() => setMobileMenuOpen(false)}>
                  Liên hệ
                </Link>
              </li>
              <li>
                <button onClick={toggleTheme} className={styles.toggleBtn}>
                  <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
