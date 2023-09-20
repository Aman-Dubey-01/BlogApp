import React from 'react'
import styles from "./UI.module.css";
import Link from "next/link";

export const Button = (props) => {
  return (
    <div>
        <Link href={props.href} className={styles.button}>{props.children}{props.value}</Link>
    </div>
  )
}
