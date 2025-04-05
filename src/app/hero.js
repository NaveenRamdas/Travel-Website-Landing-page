import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import girlImg from "../../public/hero-assets/girl.svg";
import textImg from "../../public/hero-assets/text.svg";
import playImg from "../../public/hero-assets/Play.svg";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitle}>
          BEST DESTINATIONS AROUND THE WORLD
        </div>
        <div className={styles.heroTextImg}>
          <Image
            src={textImg}
            width={0}
            height={0}
            alt="text"
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* <div className={styles.heroDescription}>
          <div>Built Wicket longer admire do barton vanity itself do in it.</div>
          <div>Preferred to sportsmen it engrossed listening. Part gate</div>
          <div>sell they west hard fot the.</div>
        </div> */}
        <div className={styles.heroDescription}>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Part gate sell they west hard for
          the.
        </div>

        <div className={styles.heroButtons}>
          <div className={styles.findBtn}>Find</div>
          <div className={styles.playDemoBtn}>
            <Image
              src={playImg}
              alt="play-btn"
              className={styles.playImg}
              width={100}
              height={50}
            />
            Play Demo
          </div>
        </div>
      </div>
      <div className={styles.heroImg}>
        <Image
          src={girlImg}
          width={0}
          height={0}
          alt="hero-img"
          sizes="(max-width: 768px) 100vw, 550px"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Hero;
