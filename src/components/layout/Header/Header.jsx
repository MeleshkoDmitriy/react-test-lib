import React from 'react'
import styles from "./Header.module.less";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>1</li>
          <li className={styles.headerNavListItem}>2</li>
          <li className={styles.headerNavListItem}>3</li>
        </ul>
      </nav>
    </header>
  );
};
