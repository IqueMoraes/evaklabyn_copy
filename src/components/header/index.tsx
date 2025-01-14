import styles from "./header.styles.module.css";
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.red}></section> {/* Borda ao topo */}
            
            <section className={styles.logoContainer}>
                <img src="/images/logo.png" alt="Imagem da logo" className={styles.logo} />
            </section>

            <hr className={styles.divider} />  {/* Linha divisora */}
            
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link href="/visite" aria-label="Visite a página Visite">visite</Link></li>
                    <li><Link href="/sobre" aria-label="Visite a página Sobre">sobre</Link></li>
                    <li><Link href="/programacao" aria-label="Visite a página Programação">programação</Link></li>
                    <li><Link href="/apoie" aria-label="Visite a página Apoie">apoie</Link></li>
                    <li><Link href="/eventos" aria-label="Visite a página Eventos">eventos</Link></li>
                </ul>
            </nav>
        </header>
    );
}
