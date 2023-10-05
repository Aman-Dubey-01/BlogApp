import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/ms-dhoni-an-inspiration-to-many" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/sports.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.sports}`}>Sports</span>
          <h3 className={styles.postTitle}>
          MS Dhoni – An Inspiration to Many
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aman</span>
            <span className={styles.date}> - 20.09.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/7-effective-fitness-tips-for-beginners" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fitness.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fitness}`}>Fitness</span>
          <h3 className={styles.postTitle}>
          7 Effective Fitness Tips For Beginners
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bhovesh</span>
            <span className={styles.date}> - 20.09.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/chatgpt-vs-bard-which-is-better-for-coding" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.tech}`}>
            Tech
          </span>
          <h3 className={styles.postTitle}>
          ChatGPT Vs Bard: Which is better for coding?
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aman</span>
            <span className={styles.date}> - 21.09.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
