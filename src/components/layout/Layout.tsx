import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './layout.module.css';

export default function Layout(): JSX.Element {
  return (
    <div className={styles.super_container}>
      <header className={styles.main_header}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.main_footer}>
        <Footer />
      </footer>
    </div>

  );
}
