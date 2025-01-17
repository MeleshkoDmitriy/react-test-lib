import React from "react";
import styles from "./HomePage.module.less";
import logo from "../../assets/logo.svg";
import { Form } from "../../components/ui/Form/Form";

export const HomePage = () => {
  return (
    <>
      <div className={styles.content}>
        <img
          className={styles.contentImage}
          data-testid="image"
          src={logo}
          alt="logo"
        />
        <a
          className={styles.contentLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Form />
    </>
  );
};
