import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      {/* Row (Logo + Nav) */}
      <div className={styles.logo__nav_container}>
        {/* Logo */}
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src={"https://www.codigo.co/img/ui/logo-codigo-red.svg"}
          />
        </div>

        {/* Nav */}
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

          {/* Button */}
          <div className={styles.button_container}>
            <span className={styles.button}>
              <p className={styles.button_text}>Request a quote</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
