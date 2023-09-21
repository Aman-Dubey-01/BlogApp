"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { BsFillPencilFill } from 'react-icons/bs';
import { Button } from "../UI/Button";

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
          <Link href="/write" className={styles.link}>
            <div className={styles.link_inner}>
              <Button value="Write" href="/write" ><BsFillPencilFill /> </Button>
            </div>
          </Link>
          <span className={styles.link} onClick={signOut}>
            <div className={`${styles.link_button} ${styles.link_rev}` }>Logout</div>
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
          <Link href="/#category" className={styles.burger_link} onClick={() => setOpen(!open)}>Category</Link>
          <Link href="/#footer" className={styles.burger_link} onClick={() => setOpen(!open)}>About</Link>
          {status === "unauthenticated" ? (
            <Link href="/login"><div className={styles.link_button}>Login</div> </Link>
          ) : (
            <>
              <Link href="/write">
                <Link href="/write" className={styles.burger_link} onClick={() => setOpen(!open)} >Write</Link>
              </Link>
              <span className={styles.link} onClick={signOut}>
                <div >Logout</div>
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
