import React from "react";
import styles from "./Category.module.css";
import Link from "next/link";
import Image from "next/image";


const Category = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.all}`}
        >
          All
        </Link>

        <Link
          href="/blog?cat=sports"
          className={`${styles.category} ${styles.sports}`}
        >
          <Image
            src='/sports.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Sports
        </Link>

        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src='/fashion.webp'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src='/food.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src='/travel.jpg'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>

        <Link
          href="/blog?cat=fitness"
          className={`${styles.category} ${styles.fitness}`}
        >
          <Image
            src='/fitness.jpg'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fitness
        </Link>

        <Link
          href="/blog?cat=tech"
          className={`${styles.category} ${styles.tech}`}
        >
          <Image
            src='/coding.webp'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Tech
        </Link>

      </div>
    </div>
  );
};



export default Category;
