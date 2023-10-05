"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { BsFillPencilFill } from 'react-icons/bs';
import { Button } from "../UI/Button";
import { BiUserCircle } from "react-icons/bi";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          <div className={styles.link_button}>Login</div>
        </Link>
      ) : (
        <>
          <Link href="/profile" className={styles.link}>
            <div className={styles.link_inner}>
              <Button value="Profile" href="/profile" ><BiUserCircle className={styles.link_icon} /> </Button>
            </div>
          </Link>
          <Link href="/write" className={styles.link}>
            <div className={styles.link_inner}>
              <Button value="Write" href="/write" ><BsFillPencilFill className={styles.link_icon} /> </Button>
            </div>
          </Link>
          <span className={styles.link} onClick={signOut}>
            <div className={`${styles.link_button} ${styles.link_rev}`}>Logout</div>
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.burger_link} onClick={() => setOpen(!open)}>Home</Link>
          <Link href="/blog" className={styles.burger_link} onClick={() => setOpen(!open)}>Blog</Link>
          {status === "unauthenticated" ? (
            <Link href="/login"><div className={styles.link_button}>Login</div> </Link>
          ) : (
            <>
              <Link href="/profile" className={styles.burger_link} onClick={() => setOpen(!open)}>Profile</Link>
              <Link href="/write">
                <Link href="/write" className={styles.burger_link} onClick={() => setOpen(!open)} >Write</Link>
              </Link>
              <span className={styles.link} onClick={signOut}>
                <Link href="/login"><div className={styles.link_button} onClick={() => setOpen(!open)}>Logout</div> </Link>
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
