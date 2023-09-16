import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Aman here!</b> <br /> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Unveiling the Beauty of Cinque Terre National Park </h1>
          <p className={styles.postDesc}>
            Cinque Terre National Park, nestled on Italy's stunning Riviera, 
            is a true marvel. With its vibrant villages perched on cliffs, terraced vineyards, 
            and breathtaking hiking trails, this UNESCO World Heritage Site promises a unique adventure.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
