import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

import { ImHome } from 'react-icons/im';
import { BiCategory,BiUserCircle } from 'react-icons/bi';
import { Button } from "../UI/Button";
import { SearchBar } from "../searchBar/SearchBar";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_item}>
            <Image className={styles.logo_img} src="/logoicon.png" alt="logo" width={32} height={32} />
            {/* <p>&nbsp;𝐏𝐞𝐧𝐂𝐡𝐚𝐩𝐭𝐞𝐫𝐬</p> */}
            <div className={styles.logo_text}>&nbsp;𝐏𝐞𝐧𝐂𝐡𝐚𝐩𝐭𝐞𝐫𝐬</div>
          </Link>
        </div>
        <div className="search">
          <SearchBar />
        </div>
        <div className={styles.togglebtn}>
          <ThemeToggle />
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <Button value="Home" href="/" ><ImHome className={styles.link_icon} /> </Button>
          </div>
          <div className={styles.link}>
            <Button value="Blog" href="/blog" ><BiCategory className={styles.link_icon} /> </Button>
          </div>
          
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
