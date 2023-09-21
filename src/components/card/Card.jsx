import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { Button } from "../UI/Button";


const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          <Button value="Read More -&gt;" href={`/posts/${item.slug}`}> </Button>
        </Link>
      </div>
    </div>
  );
};
// my version 
// const Card = ({key,item}) => {
//   return (
//     <div className={styles.container} key={key}>
//       <div className={styles.imageContainer}>
//       {item.img && <Image src={item.img} alt="" fill className={styles.image} />}
//       </div>
//       <div className={styles.textContainer}>
//         <div className={styles.detail}>
//           <span className={styles.date}>
//             {item.createdAt.substring(0, 10)} 
//           </span>
//           <span className={styles.category}>&nbsp; {item.catSlug}</span>
//         </div>
//         <Link href={`/posts/${item.slug}`}>
//           <h1>{item.title}</h1>
//         </Link>
//         <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
//         <Link href={`/posts/${item.slug}`} className={styles.link}>
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };





export default Card;
