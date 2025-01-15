import Image from "next/image";
import styles from "./page.module.css";
import { HomeSection } from "@/_components/home_sections";
import { CurrentEvents } from "@/_components/section_current_events/current_events";

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
      <HomeSection
        title="Programação em cartaz"
        subtitle={
          <p>
            <span>Pode explorar</span>. A casa é sua.
          </p>
        }
      >
        <CurrentEvents />
      </HomeSection>
    </>
  );
}
