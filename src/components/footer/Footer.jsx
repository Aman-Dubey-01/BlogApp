import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logo_item}>
              <Image src="/logoicon.png" alt="logo" width={32} height={32} />
              <p className={styles.logoText}>&nbsp;𝐏𝐞𝐧𝐂𝐡𝐚𝐩𝐭𝐞𝐫𝐬</p>
            </Link>
          </div>
          <p className={styles.desc}>
            "PenChapters: Where Stories Unfold. Your premier platform for crafting, sharing,
            and exploring captivating narratives. Join the PenChapters community today!"
          </p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/" className={styles.list_item}>Homepage</Link>
            <Link href="/" className={styles.list_item}>Cayegory</Link>
            <Link href="/" className={styles.list_item}>Write</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link
              href={"/blog?cat=sports"}
              className={styles.category} >
              <span className={styles.list_item}>Sports</span>
            </Link>
            <Link
              href={"/blog?cat=sports"}
              className={styles.category} >
              <span className={styles.list_item}>Fashion</span>
            </Link>
            <Link
              href={"/blog?cat=sports"}
              className={styles.category} >
              <span className={styles.list_item}>Fitness</span>
            </Link>
            <Link
              href={"/blog?cat=sports"}
              className={styles.category} >
              <span className={styles.list_item}>Tech</span>
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/" className={styles.list_item}>Facebook</Link>
            <Link href="/" className={styles.list_item}>Instagram</Link>
            <Link href="/" className={styles.list_item}>Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
