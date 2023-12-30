import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Description = () => {
  const phrases = [
    "Lorem, ipsum dolor sit amet ipsum dolor sit amet",
    "Beatae, pariatur. Recusandae pariatur. Recusandae.",
    "Magni sint odit, quasi non odit, quasi non",
    "exercitationem accusamus exercitationem accusamus.",
    "Lorem, ipsum dolor sit amet ipsum dolor sit amet",
    "Beatae, pariatur. Recusandae pariatur. Recusandae.",
  ];
  return (
    <section className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </section>
  );
};

function AnimatedText({ children }) {
    const textRef = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true
            },
            left: "-200px",
            opacity: 0
        })
    }, [])
  return <p ref={textRef}>{children}</p>;
}

export default Description;
