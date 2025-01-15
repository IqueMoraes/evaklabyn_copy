import styles from './newsletter.styles.module.css';

export function SectionNewsletter() {
    return (
        <section className={styles.container}>
            
            <section className={styles.titleContainer}>        {/* Título e texto lado a lado */}
                <h2>Newsletter</h2>
                <p>Receba a programação da casa.</p>
            </section>

                                                               {/* Área em cinza com o campo de e-mail */}
            <section className={styles.newsletterBox}>
                                                               {/* Campo de e-mail e ícone */}
                <article className={styles.emailInput}>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        aria-label="Digite seu e-mail"
                    />
                    <span className={styles.icon}>✉️</span>
                                                                {/* Botão Grupo do WhatsApp */}
                    <button className={styles.whatsappButton}>
                        Grupo do WhatsApp
                    </button>
                </article>


            </section>
        </section>
    );
}
