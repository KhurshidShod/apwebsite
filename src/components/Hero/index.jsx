import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const Hero = () => {
  const heroSvg1 = useRef(null);
  const heroSvg2 = useRef(null);
  const heroSvg3 = useRef(null);
  const heroSvg4 = useRef(null);
  const heroSvg5 = useRef(null);
  const heroSvg6 = useRef(null);
  const heroSvg7 = useRef(null);
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;
  const setPath = useCallback((progress) => {
    const width = window.innerWidth;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  }, [x]);
  useEffect(() => {
    setPath(progress);
  }, [progress, setPath]);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => animateSvgs(e));
  }, [])
  const animateSvgs = (e) => {
    const speed1 = heroSvg1.current.getAttribute("data-speed");
    const speed2 = heroSvg2.current.getAttribute("data-speed");
    const speed3 = heroSvg3.current.getAttribute("data-speed");
    const speed4 = heroSvg4.current.getAttribute("data-speed");
    const speed5 = heroSvg5.current.getAttribute("data-speed");
    const speed6 = heroSvg6.current.getAttribute("data-speed");
    const speed7 = heroSvg7.current.getAttribute("data-speed");
    const x1 = (window.innerWidth - e.clientX * speed1) / 150;
    const y1 = (window.innerHeight - e.clientY * speed1) / 150;
    const x2 = (window.innerWidth - e.clientX * speed2) / 150;
    const y2 = (window.innerHeight - e.clientY * speed2) / 150;
    const x3 = (window.innerWidth - e.clientX * speed3) / 150;
    const y3 = (window.innerHeight - e.clientY * speed3) / 150;
    const x4 = (window.innerWidth - e.clientX * speed4) / 150;
    const y4 = (window.innerHeight - e.clientY * speed4) / 150;
    const x5 = (window.innerWidth - e.clientX * speed5) / 150;
    const y5 = (window.innerHeight - e.clientY * speed5) / 150;
    const x6 = (window.innerWidth - e.clientX * speed6) / 150;
    const y6 = (window.innerHeight - e.clientY * speed6) / 150;
    const x7 = (window.innerWidth - e.clientX * speed7) / 150;
    const y7 = (window.innerHeight - e.clientY * speed7) / 150;
    heroSvg1.current.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
    heroSvg2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    heroSvg3.current.style.transform = `translateX(${x3}px) translateY(${y3}px)`;
    heroSvg4.current.style.transform = `translateX(${x4}px) translateY(${y4}px)`;
    heroSvg5.current.style.transform = `translateX(${x5}px) translateY(${y5}px)`;
    heroSvg6.current.style.transform = `translateX(${x6}px) translateY(${y6}px)`;
    heroSvg7.current.style.transform = `translateX(${x7}px) translateY(${y7}px)`;
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.01);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
        <img ref={heroSvg1} data-speed="-7" className={styles.herosvg} src="/images/svgs/hero_1.svg" />
        <img ref={heroSvg2} data-speed="3" className={styles.herosvg} src="/images/svgs/hero_2.svg" />
        <img ref={heroSvg3} data-speed="7" className={styles.herosvg} src="/images/svgs/hero_3.svg" />
        <img ref={heroSvg4} data-speed="5" className={styles.herosvg} src="/images/svgs/hero_4.svg" />
        <img ref={heroSvg5} data-speed="1" className={styles.herosvg} src="/images/svgs/hero_6.svg" />
        <img ref={heroSvg6} data-speed="-4" className={styles.herosvg} src="/images/svgs/hero_5.svg" />
        <img ref={heroSvg7} data-speed="2" className={styles.herosvg} src="/images/svgs/hero_8.svg" />
          
          <div
            className={styles.hero__wrapper_text}
            data-scroll
            data-scroll-speed="0.4"
          >
            <h1>Abdulaziz Programmer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
              molestiae est nostrum harum exercitationem cumque ab asperiores
              suscipit dolorum qui sunt laudantium iure rem recusandae commodi
              nisi praesentium eum, totam tempora quas nam officia dolores
              adipisci. Ab, culpa. Tempora, officiis! Temporibus illum at
              tempore officia repellendus delectus cum distinctio dicta.
            </p>
          </div>
          <div
            className={styles.hero__wrapper_image}
            data-scroll
            data-scroll-speed="0.7"
          >
            <Image
              src="/images/hero2.png"
              width={600}
              height={600}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className={styles.box}
        ></div>
        <svg>
          <path ref={path}></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
