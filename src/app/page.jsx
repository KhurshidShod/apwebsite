"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
