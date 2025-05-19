"use client";
import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import { createPortal } from "react-dom";
import Overlay from "../Overlay/Overlay";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import variables from "../../styles/variables.module.scss";
import { usePathname } from 'next/navigation';

const Navbar = ({ links, logoImage, title, background, transparent }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    let bodyStyle = menuIsOpen ? "unset" : "hidden";
    document.body.style.overflow = bodyStyle;
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${background && styles.background} ${menuIsOpen && styles.open} ${transparent && styles.transparent}`}
    >
      <Link className={styles.navbar__logo} href="/">
        <img src={logoImage} alt="Logo Image" />
      </Link>

      <div className={styles.navbar__toggle}>
        <MenuButton clickFn={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className={styles.navbar__links}>
        {links.map((link, idx) => {
          return (
            <Link
              className={`${styles.navbar__link}`}
              href={link.value}
              key={`navbar-d-${link.label}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {menuIsOpen &&
        createPortal(
          <Overlay
            closeFn={() => setMenuIsOpen(false)}
            hideClose={true}
            background={variables.neutralDark}
          >
            <div className={styles.navbar__mobileDialog}>
              {links.map((link, idx) => {
                return (
                  <Link
                    className={styles.navbar__link}
                    href={link.value}
                    key={`m-${link.label}`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Overlay>,
          document.body
        )}
    </nav>
  );
};

export default Navbar;
