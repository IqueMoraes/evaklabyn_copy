import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <section className={styles.newsImageContainer}>
        <img className={styles.newsImage} src="/images/img_principal.png" alt="" />
      </section>

    
    </>
  );
}
