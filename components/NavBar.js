import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/NavBar.module.css";
import Spacer from "./Spacer";

const NavBar = () => {
  const router = useRouter();
  return (
    <>
      {/* Row (Logo + Nav) */}
      <div className={styles.logo__nav_container}>
        {/* Logo */}
        {router.pathname == "/" && (
          <div className={styles.logo_container}>
            <img
              className={styles.logo}
              src={"https://www.codigo.co/img/ui/logo-codigo-red.svg"}
            />
          </div>
        )}

        {/* Back */}
        {router.pathname == "/ocbc-pay-anyone" && (
          <div className={styles.container} onClick={() => router.push("/")}>
            <img
              src={"https://www.codigo.co/img/icons/arrow-red.svg"}
              className={styles.back_icon}
            />
            <a href="#" className={styles.back}>
              Back to Work
            </a>
          </div>
        )}

        <Spacer />

        {/* Nav */}
        {router.pathname == "/" && (
          <div className={styles.nav_container}>
            <div>
              <nav className={styles.nav}>
                <a
                  href="#"
                  className={(styles.nav_item, styles.current_nav_item)}
                >
                  Work
                </a>
                <a href="#" className={styles.nav_item}>
                  Solutions
                </a>
                <a href="#" className={styles.nav_item}>
                  Services
                </a>
                <a href="#" className={styles.nav_item}>
                  About us
                </a>
                <a href="#" className={styles.nav_item}>
                  Blog
                </a>
              </nav>
            </div>
          </div>
        )}

        {/* Button */}
        <div className={styles.button_container}>
          <span className={styles.button}>
            <p className={styles.button_text}>Request a quote</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;
