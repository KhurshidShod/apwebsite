import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Intro = () => {

  const backgroundImageRef = useRef(null)
  const introImageRef = useRef(null)

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: document.documentElement,
            scrub: true,
            start: "top",
            end: "+=500px",
        },
    })

    timeline
        .from(backgroundImageRef.current, {clipPath: `inset(15%)`})
        .to(introImageRef.current, {height: "200px"}, 0)
}, [])
  return (
    <section className={styles.intro}>
          <div ref={backgroundImageRef} className={styles.intro__firstImage}>
            <Image src={"/images/2.jpg"} fill={true} alt="Image" />
          </div>
          <div className={styles.intro__introContainer}>
            <div
              ref={introImageRef}
              data-scroll
              data-scroll-speed="0.3"
              className={styles.intro__introContainer_introImage}
            >
              <Image src={"/images/3.jpg"} fill={true} alt="Image" />
          </div>
              <h1><span data-scroll data-scroll-speed="0.7">Abdulaziz</span> <span data-scroll data-scroll-speed="0.5">Programmer</span></h1>
        </div>
    </section>
  );
};

export default Intro;
