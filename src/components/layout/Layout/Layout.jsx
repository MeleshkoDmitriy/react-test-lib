import React from "react";
import styles from './Layout.module.less';
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
