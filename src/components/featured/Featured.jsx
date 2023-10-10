import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div id="home" className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Readers!</b> Discover Top Picks of the Week !
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featured.jpeg" alt="" fill className={styles.image} loading="eager" />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            ChatGPT Vs Bard: Which is better for coding?
          </h1>
          <p className={styles.postDesc}>
            Google Bard and ChatGPT are some of the most popular AI Chatbots in the market, capable of generating text,
            translating languages, and answering questions. While they share similarities, there are notable differences
            between the two. Additionally, Google Bard has recently received significant upgrades that make it a more
            powerful competitor to ChatGPT.</p>
          <button className={styles.button}>
            <Link href="/posts/chatgpt-vs-bard-which-is-better-for-coding">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
