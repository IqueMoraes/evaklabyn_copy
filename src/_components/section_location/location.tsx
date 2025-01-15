"use client";
import { HomeSection } from '../home_sections';
import styles from './location.styles.module.css';

export function SectionLocation() {
    return (
        <HomeSection title="Como chegar" subtitle={<p><span>Visite</span> o Museu Eva Klabin.</p>}>

   
            <section className={styles.content}>
                
                <article className={styles.info} aria-labelledby="location-info">
                    <figure className={styles.infoItem}>
                        <img src="/icons/location.png" alt="Ícone de Localização" className={styles.icon} />
                        <figcaption>Endereço:</figcaption>
                    </figure>
                    <p>Avenida Epitácio Pessoa, 2480 – Lagoa, Rio de Janeiro</p>

                    <figure className={styles.infoItem}>
                        <img src="/icons/clock.png" alt="Ícone de Relógio" className={styles.icon} />
                        <figcaption>Horário:</figcaption>   
                    </figure>
                    <p>Quarta a Domingo, 14h às 18h</p>

                    <figure className={styles.infoItem}>
                        <img src="/icons/ticket.png" alt="Ícone de Ingressos" className={styles.icon} />
                        <figcaption>Ingressos:</figcaption>
                    </figure>
                    <p>Entrada livre e gratuita.</p>

                </article>

                {/* Mapa do Google */}
                <section className={styles.map}>
                    <iframe
                        title="Museu Eva Klabin"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8823268429074!2d-43.21249978445315!3d-22.977187546335485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5bd69d873d%3A0x8d0d1c308c4a6ffb!2sAv.%20Epit%C3%A1cio%20Pessoa%2C%202480%20-%20Lagoa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022420-102!5e0!3m2!1spt-BR!2sbr!4v1633375665945!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="400"
                        loading="lazy"
                    />
                </section>
            </section>
            </HomeSection>
    );
}
