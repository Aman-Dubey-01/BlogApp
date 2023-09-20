import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div id="home" className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Readers!</b> Discover Top Picks of the Week !
      </h1>
      
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/Productive.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}><b> Mastering the Art of Productivity:</b> A Comprehensive Guide </h1>
          <p className={styles.postDesc}>
          Unlock your true potential and regain control of your time with our 'Mastering the Art of Productivity' guide. Discover proven strategies to streamline your daily tasks, set meaningful goals, and overcome procrastination. Start your journey to productivity mastery today !!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
