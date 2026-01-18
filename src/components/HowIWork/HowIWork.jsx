import React from "react";
import styles from "./HowIWork.module.css";

const principles = [
    {
        id: 1,
        title: "Ownership",
        description: "I take responsibility for systems end-to-end — from early design through production and iteration."
    },
    {
        id: 2,
        title: "Production-first",
        description: "I focus on reliability, evaluation, and real-world usage, not demos or hype."
    },
    {
        id: 3,
        title: "Business alignment",
        description: "My work is driven by outcomes: adoption, scale, and revenue — not just model performance."
    }
];

export const HowIWork = () => {
    return (
        <section className={styles.container} id="how-i-work">
            <h2 className={styles.sectionTitle}>How I Work</h2>
            <div className={styles.principles}>
                {principles.map((principle) => (
                    <div key={principle.id} className={styles.principle}>
                        <h3 className={styles.principleTitle}>{principle.title}</h3>
                        <p className={styles.principleDescription}>{principle.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
