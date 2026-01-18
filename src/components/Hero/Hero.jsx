import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Production-grade LLM systems that companies can actually sell.
                </h1>
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
        </section>
    );
};
