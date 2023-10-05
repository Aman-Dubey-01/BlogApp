import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { Button } from "../UI/Button";

const getData = async (page, cat) => {
  // const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    // https://blog-app-qip6.vercel.app/
  const res = await fetch(`${process.env.DOMAIN_LINK}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ( {page, cat} ) => {

  const {posts , count} = await getData(page,cat);

  const POST_PER_PAGE = 3;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Posts</h1>
      <div className={styles.posts}>
      {posts?.map((item) => (
          <Card  key={item._id} item={item}/>
        ))}
      </div>
      <div >
          <button href='/blog' className={styles.button}>Explore Blog</button>
        </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  );
};

export default CardList;
