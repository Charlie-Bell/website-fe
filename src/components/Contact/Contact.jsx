import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <section className={styles.container} id="contact">
            <h2 className={styles.title}>Let's talk</h2>
            <p className={styles.description}>
                If you're building or scaling a customer-facing LLM system and want someone to own the production side, feel free to reach out.
            </p>
            <div className={styles.links}>
                <a href="mailto:charlie.james.bell@gmail.com" className={styles.link}>
                    Email
                </a>
                <a href="https://linkedin.com/in/charlie-bell" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn
                </a>
            </div>
        </section>
    );
};
