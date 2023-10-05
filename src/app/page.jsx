import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import { Button } from "@/components/UI/Button";
import Link from "next/link";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;


  return <div className={styles.container}>
    <div className="container">
      <div className="wrapper">
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList
            page={page}
          />
          <Menu />
        </div>
        <Link href="/blog">
          <button href='/blog' className={styles.button}>Explore Blog</button>
        </Link>
      </div>
    </div>
  </div>;
}
