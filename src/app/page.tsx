import Image from "next/image";
import styles from "./page.module.css";
import { CurrentEvents } from "@/_components/section_current_events/current_events";
import { SectionLocation } from "@/_components/section_location/location";

export default function Home() {
  return (
    <>
      <section className={styles.newsImageContainer}>
        <img
          className={styles.newsImage}
          src="/images/img_principal.png"
          alt=""
        />
      </section>
      <CurrentEvents />
      <SectionLocation />
    </>
  );
}
