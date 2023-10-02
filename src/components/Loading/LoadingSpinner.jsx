
import styles from "./loadingSpinner.module.css";

export function Loading() {
    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__inner}>
                <div className={styles.overlay__content}>
                    <span className={styles.spinner} ></span></div>
            </div>
        </div>
    )
}
export function Smallspinner() {
    return (
        <div className={styles['loading-spinner']}>
            <div className={styles.circle} >
            </div>
            <span className={styles['progress-text']} ></span> 
        </div>
    )
}
