import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.sectionTitle}>About</h2>
            <div className={styles.content}>
                <p>I'm a senior machine learning engineer specialising in production LLM systems.</p>
                <p>I've built and operated customer-facing AI platforms used at scale, where reliability and trust are non-negotiable.</p>
                <p>I typically work with teams moving an LLM from prototype to a real product.</p>
            </div>
        </section>
    );
};
