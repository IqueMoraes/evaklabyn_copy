import styles from './current_events.styles.module.css';

const events = [
    {
        id: 1,
        type: 'Exposição',
        title: 'Rosana Paulino',
        subtitle: 'Novas Raízes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel mauris eget nisl euismod euismod. Nulla facilisi.',
        image: '/images/section_card_01.png',
    },
    {
        id: 2,
        type: 'Oficina',
        title: 'Masterclass',
        subtitle: 'Ole BÖhen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel mauris eget nisl euismod euismod. Nulla facilisi.',
        image: '/images/section_card_02.png',
    },
    {
        id: 3,
        type: 'Programação Musical',
        title: 'Concerto de Eva',
        subtitle: 'Janeiro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel mauris eget nisl euismod euismod. Nulla facilisi.',
        image: '/images/section_card_03.png',
    },
];

export function CurrentEvents() {
    return (
        <section className={styles.container}>                       {/* Título e texto */}

            <section className={styles.titleContainer}>
                <h2>Programação</h2>
                <p><span className={styles.span}>Pode explorar</span>. A casa é sua.</p>
            </section>

            <section className={styles.divider}></section>            {/* Linha separadora */}

            <article className={styles.cards}>                        {/* Cards de eventos de forma estatica teste para a estilização */}
                {events.map(event => (
                    <div key={event.id} className={styles.card}>
                        <img src={event.image} alt={event.title} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <p className={styles.cardType}>{event.type}</p>
                            <h2 className={styles.cardTitle}>{event.title}</h2>
                            <h3 className={styles.cardSubTitle}>{event.subtitle}</h3>
                            <p className={styles.cardDescription}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
}
