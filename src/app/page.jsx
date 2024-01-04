"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import ContactPage from "@/components/Contact";

export default function Main() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Hero />
      <ContactPage />
    </main>
  );
}