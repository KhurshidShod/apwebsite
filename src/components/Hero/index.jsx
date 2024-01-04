import { useRef, useEffect } from "react";
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
  const heroImage = useRef(null);
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;
  const animateSvgs = (e) => {
    const speed1 = heroSvg1.current.getAttribute("data-speed");
    const speed2 = heroSvg2.current.getAttribute("data-speed");
    const speed3 = heroSvg3.current.getAttribute("data-speed");
    const speed4 = heroSvg4.current.getAttribute("data-speed");
    const speed5 = heroSvg5.current.getAttribute("data-speed");
    const speed6 = heroSvg6.current.getAttribute("data-speed");
    const speed7 = heroSvg7.current.getAttribute("data-speed");
    const speed8 = heroImage.current.getAttribute("data-speed");
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
    const x8 = (window.innerWidth - e.clientX * speed7) / 150;
    const y8 = (window.innerHeight - e.clientY * speed7) / 150;
    heroSvg1.current.style.transform = `translateX(${x1}px) translateY(${y1}px)`;
    heroSvg2.current.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    heroSvg3.current.style.transform = `translateX(${x3}px) translateY(${y3}px)`;
    heroSvg4.current.style.transform = `translateX(${x4}px) translateY(${y4}px)`;
    heroSvg5.current.style.transform = `translateX(${x5}px) translateY(${y5}px)`;
    heroSvg6.current.style.transform = `translateX(${x6}px) translateY(${y6}px)`;
    heroSvg7.current.style.transform = `translateX(${x7}px) translateY(${y7}px)`;
    heroImage.current.style.transform = `translateX(${x8}px) translateY(${y8}px)`;
  }
  useEffect(() => {
    setPath(progress);
    window.addEventListener("mousemove", (e) => animateSvgs(e));
  }, []);
  const setPath = (progress) => {
    const width = window.innerWidth;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

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
          <svg
          data-speed="9"
          ref={heroSvg1}
          data-scroll
          data-scroll-speed="0.1"
            className={styles.herosvg}
            width="63"
            height="53"
            viewBox="0 0 63 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 112"
              d="M9.22779 48.8746C9.53691 44.547 11.2451 40.6624 13.2233 36.8554C17.8173 28.0141 22.0968 19.0219 26.6507 10.1643C27.697 8.12918 28.7834 6.18208 30.3842 4.53133C30.4833 4.42908 32.6299 2.7675 32.4474 2.40259C31.8222 1.15218 32.2855 5.22759 32.5784 6.59457C34.3764 14.985 37.3953 23.2182 40.3401 31.2552C41.8457 35.3642 43.4808 39.4016 45.3181 43.3726C46.1013 45.0653 47.7037 50.208 47.8726 48.3506C48.1139 45.6955 42.4933 40.8814 40.8641 39.4099C32.8459 32.1676 22.2013 27.0626 12.6665 22.1507C10.3549 20.9599 -5.02985 11.146 5.85456 13.2755C21.6813 16.3721 37.6947 25.677 54.226 23.8537C54.8808 23.7815 60.6629 21.6505 61.2345 22.4127C61.3244 22.5325 50.2333 26.3858 49.6738 26.6047C39.0518 30.7612 28.2892 35.1034 18.0047 40.0321C13.195 42.3372 7.20219 45.3909 5.10132 50.6431"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          data-speed="4"
          ref={heroSvg2}
                    data-scroll
                    data-scroll-speed="0.8"
            className={styles.herosvg}
            width="68"
            height="97"
            viewBox="0 0 68 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 144"
              d="M12.3785 2C6.64063 7.52048 4.73045 18.1736 3.35305 25.661C1.55243 35.4489 0.346763 45.7064 7.89525 53.5199C13.4783 59.2989 21.8589 60.9479 29.6329 60.2718C35.4438 59.7664 51.0872 56.532 50.3678 48.2652C49.8664 42.5044 42.8877 38.659 37.626 38.6951C28.7659 38.7559 22.6816 46.9275 21.0499 54.8996C18.9909 64.96 22.0932 75.53 29.8394 82.4063C39.8257 91.2711 53.1211 93.9013 66 95"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          data-speed="2"
          ref={heroSvg3}
                    data-scroll
                    data-scroll-speed="0.9"
            className={styles.herosvg}
            width="58"
            height="176"
            viewBox="0 0 58 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 153"
              d="M9.46311 4.95396C9.46311 -0.78226 27.3281 3.54874 30.5442 3.85149C36.7182 4.43267 42.8878 5.13136 49.0776 5.52562C50.1368 5.59308 59.1615 5.42783 54.5019 7.48557C39.2443 14.2236 21.3669 14.2358 6.66872 22.1852C4.14463 23.5504 -1.25854 27.9514 4.69622 28.7184C13.166 29.8094 22.3423 27.7721 30.8319 27.4526C36.006 27.2579 44.2711 26.1638 49.1597 28.6367C51.9814 30.0641 39.06 34.9103 38.5575 35.0883C29.7909 38.1931 20.8912 40.8669 12.8328 45.623C9.19954 47.7674 7.63751 49.7448 12.7506 50.5229C19.9015 51.6111 27.413 50.6193 34.5714 50.1554C37.8584 49.9424 53.6737 46.8525 55.9813 50.6046C57.0531 52.3472 11.6513 73.0668 7.40841 75.3081C6.38808 75.8471 -0.267385 79.3603 4.69622 79.7589C13.2424 80.4451 22.7091 77.4547 31.0785 76.084C38.2758 74.9051 45.6303 73.004 52.9404 72.6949C57.8777 72.4861 46.7963 76.9632 46.4476 77.1048C38.3155 80.4064 30.2061 83.7238 22.5309 88.007C19.8939 89.4787 8.62973 94.8914 9.54529 99.4401C10.429 103.831 24.7558 102.676 27.38 102.707C35.0944 102.798 46.2288 101.387 52.8582 106.382C56.8662 109.401 52.7975 112.727 50.0227 114.589C40.6658 120.868 30.0252 125.475 20.1475 130.881C18.5163 131.774 4.09436 138.847 9.17545 142.559C14.1166 146.169 25.5002 143.034 30.9141 142.396C35.5562 141.848 44.5687 139.363 48.9954 141.987C53.2994 144.54 37.5096 151.597 36.6672 151.951C28.3653 155.432 5.1418 164.252 20.5584 174"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          data-speed="1"
          ref={heroSvg4}
                    data-scroll
                    data-scroll-speed="0.3"
            className={styles.herosvg}
            width="120"
            height="77"
            viewBox="0 0 120 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 251"
              d="M64.8505 3.0612C69.3098 -3.00047 63.4149 18.4566 59.825 25.0704C52.3011 38.9321 38.1004 40.2687 23.9853 38.6631C16.5531 37.8176 -1.13054 32.9884 2.12134 21.9605C4.61943 13.4888 25.2891 24.0008 29.1807 25.6052C40.7673 30.3821 57.1356 37.2059 61.0539 50.6038C63.4038 58.6387 60.3195 70.4783 51.0353 71.6398C44.0603 72.5124 40.7889 63.9413 44.6976 58.5632C47.2455 55.0575 53.1349 53.2859 57.0429 52.0637C64.9521 49.5902 74.2192 49.127 82.4603 49.6828C93.4712 50.4254 107.688 56.9474 110.346 68.7338C112.255 77.1978 106.25 75.4673 100.904 72.3093C92.0687 67.0897 86.6645 56.502 84.7488 46.6209C82.9688 37.4394 91.0118 30.2929 99.0703 27.6786C104.745 25.8375 111.911 25.5445 117.233 28.6172C118.413 29.2984 118.175 28.8607 117.384 29.182C114.1 30.5173 111.622 34.2117 108.153 35.7C96.0055 40.9122 84.9771 31.7774 77.2624 23.5071C73.8537 19.853 70.9409 15.8276 67.6073 12.1173C66.901 11.3313 63.8897 8.10537 66.3362 8.60601"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          data-speed="5"
          ref={heroSvg5}
                    data-scroll
                    data-scroll-speed="0.3"
            className={styles.herosvg}
            width="217"
            height="52"
            viewBox="0 0 217 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 312"
              d="M15.1145 2.1197C68.6385 0.101834 122.528 7.0969 175.565 13.2956C192.267 15.2477 175.249 12.2654 169.666 11.7435C143.996 9.34384 117.986 10.8676 92.3015 12.1062C63.8073 13.4803 -21.3658 22.002 7.03372 19.3414C55.058 14.8422 103.485 13.7857 151.68 11.92C155.917 11.7559 173.022 9.0859 177.23 12.5789C178.413 13.56 174.183 13.1722 172.637 13.2473C163.173 13.707 153.685 13.8429 144.216 14.2156C119.44 15.1908 94.6137 15.9855 69.8674 17.5376C61.7152 18.0489 53.1166 18.7201 44.9901 19.7992C42.6944 20.1041 32.1003 20.7321 29.8271 23.101C28.7719 24.2005 32.7529 24.1415 34.2855 24.2741C44.0244 25.1169 53.8892 24.8292 63.6469 24.7084C91.7697 24.3604 119.889 23.7715 148.015 23.734C164.822 23.7116 183.051 22.5983 199.711 25.5691C210.513 27.4955 177.891 28.3214 166.914 28.5626C143.484 29.0775 120.043 28.3951 96.6213 29.4143C85.9407 29.8791 78.1154 30.4011 67.7459 31.7791C66.3144 31.9693 53.8192 32.9548 51.7868 35.3045C50.6928 36.5691 55.1563 35.6681 56.8454 35.6249C66.8023 35.3703 76.727 34.4966 86.6443 33.6475C111.818 31.492 136.792 30.4536 162.067 30.9691C169.161 31.1138 184.113 29.2476 190.901 33.0693C192.133 33.7634 188.197 34.0186 186.783 34.1515C177.099 35.0617 167.317 35.0876 157.602 35.2088C133.593 35.5082 109.807 36.4382 85.9604 39.3874C85.3775 39.4595 58.5196 42.8146 65.975 43.6582C78.2756 45.0501 91.1551 43.3333 103.439 42.6871C128.997 41.3425 154.556 40.5795 180.151 41.2141C188.713 41.4263 214.285 41.857 205.787 42.9062C192.16 44.5887 178.08 43.9243 164.384 44.5735C145.714 45.4584 127.143 47.2824 108.609 49.6063C95.525 51.2467 106.461 49.5015 111.912 48.8151C146.316 44.4834 180.396 42.3201 214.973 45.6122"
              stroke="#1E1E1E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
          data-speed="3"
          ref={heroSvg6}
                    data-scroll
                    data-scroll-speed="0.7"
            className={styles.herosvg}
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2">
              <path
                id="Vector 164"
                d="M7.68269 14.3276C7.68269 12.1681 7.12535 11.1876 5.64053 13.6173C2.4298 18.8713 -0.684711 30.174 8.57059 31.3309C16.6971 32.3467 22.9277 21.3983 19.1366 14.5052C15.0296 7.03807 5.87333 8.27428 3.68716 15.9259"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 165"
                d="M18.0047 22.9222C18.0047 20.7627 17.4474 19.7822 15.9626 22.2119C12.7518 27.4658 9.63731 38.7685 18.8926 39.9254C27.0192 40.9413 33.2498 29.9929 29.4586 23.0998C25.3516 15.6327 16.1953 16.8689 14.0092 24.5204"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 167"
                d="M21.828 7.28243C21.828 5.12291 21.2707 4.1424 19.7859 6.57211C16.5751 11.826 13.4606 23.1287 22.7159 24.2856C30.8425 25.3015 37.0731 14.3531 33.2819 7.46C29.1749 -0.00715429 20.0187 1.22905 17.8325 8.88064"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
          data-speed="-7"
          ref={heroSvg7}
                    data-scroll
                    data-scroll-speed="0.5"
          className={styles.herosvg}
            width="45"
            height="41"
            viewBox="0 0 45 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 3">
              <path
                id="Vector 320"
                d="M2.89574 7.29821C2.89574 -1.29537 2.9865 9.18481 9.49885 9.18481C17.0734 9.18481 5.12936 -0.487573 4.78235 5.41161C4.15402 16.0932 13.1033 6.5762 9.39403 5.51642C8.80874 5.34919 3.62233 5.2997 5.20159 6.87896C6.51508 8.19245 7.88461 2.48436 4.78235 3.94425C2.09849 5.20724 0.427644 8.97519 4.78235 8.97519C9.28011 8.97519 7.41465 4.52476 3.94386 5.51642C2.35929 5.96915 6.91078 7.19541 8.55555 7.29821C11.1731 7.4618 6.63057 7.29821 5.93527 7.29821C4.6497 7.29821 8.55555 5.75388 8.55555 4.46831C8.55555 0.0312975 3.98983 1.93997 6.66895 7.29821"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 321"
                d="M37.2418 10.7404C36.7597 6.8838 33.5144 12.3403 37.2418 14.0944C40.8895 15.811 45.0132 6.08824 41.8535 5.18545C38.7222 4.29082 35.1407 9.73586 38.2899 10.6356C43.5159 12.1288 43.0476 4.58648 39.5476 7.38649C38.3966 8.30729 39.1284 13.2626 39.1284 11.7886C39.1284 11.1622 38.4291 8.06854 37.3466 9.69233C37.1123 10.0437 36.6397 7.80573 35.7744 7.80573C34.4547 7.80573 36.085 11.2606 36.4033 11.5789C38.6301 13.8057 36.3399 10.6576 37.2418 8.85384"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 322"
                d="M4.34924 29.0199C7.58961 32.2603 9.65122 35.9442 14.028 37.9785C21.2826 41.3504 27.3111 37.0943 32.8671 32.6494"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 323"
                d="M39.6077 10.3536C39.6077 10.5265 39.6077 10.6993 39.6077 10.8721"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 324"
                d="M39.0892 10.3536C39.0892 10.1808 39.0892 10.0079 39.0892 9.83508"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 325"
                d="M39.0892 9.83523C39.0892 10.3579 39.7966 9.12784 40.1262 8.79822"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 326"
                d="M40.1262 8.79822C40.0562 9.35807 39.3375 9.85711 39.0892 10.3537"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 327"
                d="M4.34922 7.2425C5.08299 5.59152 4.44338 3.22429 6.45205 2.3455C8.94619 1.25431 12.0176 3.1697 10.9746 6.09026C9.80927 9.35312 5.88465 6.1727 5.44385 4.18907C5.01284 2.24954 9.09785 2.91956 9.93757 3.72818C12.4636 6.16066 7.6399 10.298 6.1928 8.19309C4.95025 6.38574 5.40269 2.55772 8.38205 3.72818C11.3679 4.90118 9.93844 11.9254 6.45205 10.0079C4.06532 8.69516 2.17762 2.63355 6.45205 2.63355C10.1923 2.63355 10.4316 8.86042 7.34504 10.1231C4.13674 11.4356 1.61779 5.24358 4.86773 4.16027C8.466 2.96084 9.34921 9.47047 7.22981 11.0449C4.21725 13.2828 1.91825 5.8545 3.85952 3.67057C6.2851 0.941791 8.41427 5.5581 7.86354 7.761C6.97595 11.3114 2.84924 7.56397 4.14758 4.67877C6.20015 0.1175 8.78533 5.54094 8.78533 8.04906C8.78533 10.1161 6.93765 9.72736 5.96235 8.48115C4.61063 6.75395 5.13992 4.87904 5.90474 3.09445"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector 328"
                d="M6.94178 10.3536C5.15593 10.552 6.91286 12.9335 8.23805 10.8721C9.13036 9.48402 8.4973 7.43169 8.4973 9.31654C8.4973 10.3863 9.53432 11.7028 9.53432 10.0943C9.53432 8.32969 7.54028 10.2428 9.53432 10.3536C12.3028 10.5074 7.00526 4.79618 6.94178 6.95446C6.88107 9.01867 8.20965 12.1334 8.4685 8.25073C8.61922 5.9899 6.42328 2.47887 6.42328 6.20551"
                stroke="#1E1E1E"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
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
            ref={heroImage}
            data-speed={5}
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
