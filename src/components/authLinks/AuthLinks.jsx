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
              {/* <span>Write</span> */}

            </div>
          </Link>
          <span className={styles.link} onClick={signOut}>
            <div className={styles.link_button}>Logout</div>
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
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login"><div className={styles.link_button}>Login</div> </Link>
          ) : (
            <>
              <Link href="/write">
                <Button value="Write" href="/write" > </Button>
              </Link>
              <span className={styles.link}><div className={styles.link_button}>Logout</div> </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
