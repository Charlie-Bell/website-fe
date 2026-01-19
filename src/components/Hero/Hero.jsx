import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Production-grade LLM systems that companies can actually sell.
            </h1>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        I help teams turn AI prototypes into reliable, revenue-generating products — especially B2B APIs and customer-facing LLMs.
                    </p>
                    <p className={styles.credibility}>
                        Senior ML Engineer · Production Systems · B2B Focus
                    </p>
                    <div className={styles.btnRow}>
                        <a href="#case-studies" className={styles.primaryBtn}>View case studies</a>
                        <a href="#contact" className={styles.secondaryBtn}>Get in touch</a>
                    </div>
                </div>
                <div className={styles.photoWrapper}>
                    <img
                        src="/assets/hero/me.jpg"
                        alt="Charlie Bell"
                        className={styles.photo}
                    />
                </div>
            </div>
        </section>
    );
};
