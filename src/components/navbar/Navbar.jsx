import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

import { ImHome } from 'react-icons/im';
import { BiCategory } from 'react-icons/bi';
import { GrContactInfo } from 'react-icons/gr';
import { Button } from "../UI/Button";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_item}>
            <Image src="/logoicon.png" alt="logo" width={32} height={32} />
            <p>&nbsp;𝐏𝐞𝐧𝐂𝐡𝐚𝐩𝐭𝐞𝐫𝐬</p>
          </Link>
        </div>
        {/* <div className={styles.social}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div> */}
        <div className={styles.links}>
          <div className={styles.link}>

            <Button value="Home" href="/#home" ><ImHome /> </Button>
            {/* <Link href="/" className={styles.link}>Home</Link> */}
          </div>
          <div className={styles.link}>
            <Button value="Category" href="/#category" ><BiCategory /> </Button>
            {/* <Link href="/" className={styles.link}>Category</Link> */}
          </div>
          <div className={styles.link}>

            <Button value="About" href="/#footer"><GrContactInfo /> </Button>
            {/* <Link href="/" className={styles.link}>About</Link> */}
          </div>
          <AuthLinks />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
