import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '@/styles/components/Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  );
}
