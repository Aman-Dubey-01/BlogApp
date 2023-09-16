import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return <div className={styles.container}>
    <div className="container">
      <div className="wrapper">
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList 
          // page={page} 
          />
          <Menu />
        </div>
      </div>
    </div>
  </div>;
}
