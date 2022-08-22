import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export default function Header(): JSX.Element {
  return (
    <nav className={styles.main_header__nav}>
      <Link className={styles.main_header__nav__item} to="/">резюме</Link>
      <Link className={styles.main_header__nav__item} to="blog">блог</Link>
    </nav>
  );
}
