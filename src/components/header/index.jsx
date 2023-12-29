"use client";
import { useRef, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Image from "next/image";

import styles from "./style.module.scss";

const Header = () => {
  const sliderRef = useRef(null);
  const [langsOpen, setLangsOpen] = useState(false);
  const sliderMouseOver = (e) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.getBoundingClientRect().width;
    sliderRef.current.style.left = `${left + width / 2}px`;
    sliderRef.current.style.width = `${width}px`;
  };
  const sliderMouseLeave = (e) => {
    sliderRef.current.style.left = `49.5%`;
    sliderRef.current.style.width = `85px`;
    sliderRef.current.style.height = `2px`;
    sliderRef.current.style.borderRadius = `15px`;
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav__wrapper}>
            <HiOutlineMenuAlt2 size={35} />
          <div ref={sliderRef} className={styles.indicator}></div>
          <ul>
            <li
              onMouseEnter={(e) => sliderMouseOver(e)}
              onMouseLeave={(e) => sliderMouseLeave(e)}
            >
              Asosiy
            </li>
            <li
              onMouseEnter={(e) => sliderMouseOver(e)}
              onMouseLeave={(e) => sliderMouseLeave(e)}
            >
              Haqimda
            </li>
          </ul>
          <Image className={styles.logo} src="/images/ap.png" width={75} height={50} alt="" />
          <ul>
            <li
              onMouseEnter={(e) => sliderMouseOver(e)}
              onMouseLeave={(e) => sliderMouseLeave(e)}
            >
              Portfolio
            </li>
            <li
              onMouseEnter={(e) => sliderMouseOver(e)}
              onMouseLeave={(e) => sliderMouseLeave(e)}
            >
              Boglanish
            </li>
          </ul>
          <GrLanguage onClick={() => setLangsOpen(!langsOpen)} size={27} />
          <div className={`${styles.langs} ${langsOpen ? styles.visible : ''}`}>
            <button>UZ</button>
            <button>RU</button>
            <button>EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
