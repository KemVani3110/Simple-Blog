import styles from "@/styles/components/Navbar.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBlog,
  faBars,
  faTimes,
  faHome,
  faNewspaper,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

// Add padding to main content to account for the fixed navbar
const NavbarSpacer = () => {
  return <div style={{ height: "70px" }} />;
};

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const current = stored || "light";
    setTheme(current);
    document.body.setAttribute("data-theme", current);
  }, []);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

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

  // Function to check if the current path matches the link
  const isActive = (path: string) => {
    // For home page
    if (path === "/" && router.pathname === "/") return true;
    // For other pages
    if (path !== "/" && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
          pageLoaded ? styles.loaded : ""
        }`}
      >
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <FontAwesomeIcon icon={faBlog} className={styles.logoIcon} />
            <span>Next Blog</span>
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={isActive("/") ? styles.activeLink : ""}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Blogs"
                className={isActive("/Blogs") ? styles.activeLink : ""}
              >
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className={styles.navIcon}
                />
                <span>Bài viết</span>
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className={isActive("/About") ? styles.activeLink : ""}
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className={styles.navIcon}
                />
                <span>Giới thiệu</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className={isActive("/Contact") ? styles.activeLink : ""}
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.navIcon} />
                <span>Liên hệ</span>
              </Link>
            </li>
          </ul>

          <div className={styles.ThemeToggle}>
            <button onClick={toggleTheme} className={styles.toggleBtn}>
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </button>
          </div>

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
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/") ? styles.activeLink : ""}
                  >
                    <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Blogs"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/Blogs") ? styles.activeLink : ""}
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className={styles.navIcon}
                    />
                    <span>Bài viết</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/About") ? styles.activeLink : ""}
                  >
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className={styles.navIcon}
                    />
                    <span>Giới thiệu</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={isActive("/Contact") ? styles.activeLink : ""}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.navIcon}
                    />
                    <span>Liên hệ</span>
                  </Link>
                </li>
                <li>
                  <button onClick={toggleTheme} className={styles.toggleBtn}>
                    <FontAwesomeIcon
                      icon={theme === "light" ? faMoon : faSun}
                    />
                    <span>
                      {theme === "light" ? "Chế độ tối" : "Chế độ sáng"}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <NavbarSpacer />
    </>
  );
}
