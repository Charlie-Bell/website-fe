import React from "react";
import styles from "./CaseStudies.module.css";

const caseStudies = [
    {
        id: 1,
        title: "OhAPI — B2B AI Inference Platform",
        description: "Built a production B2B inference API for text, image, and audio that became the company's largest source of revenue.",
        link: "#"
    },
    {
        id: 2,
        title: "Foxy AI — Scalable Persona LLM",
        description: "Designed a persona-based LLM pipeline that increased creator onboarding capacity from 1 to ~50 per week.",
        link: "#"
    },
    {
        id: 3,
        title: "Upselling LLM — Revenue Optimization",
        description: "Trained and deployed a customer-facing upselling LLM, currently live and undergoing A/B testing across B2B clients.",
        link: "#"
    }
];

export const CaseStudies = () => {
    return (
        <section className={styles.container} id="case-studies">
            <h2 className={styles.sectionTitle}>Case Studies</h2>
            <div className={styles.cards}>
                {caseStudies.map((study) => (
                    <div key={study.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{study.title}</h3>
                        <p className={styles.cardDescription}>{study.description}</p>
                        <a href={study.link} className={styles.cardLink}>
                            Read case study
                            <span className={styles.arrow}>&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
