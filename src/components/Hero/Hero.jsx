import React from "react";

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey! I'm Charlie</h1>
            <p className={styles.description}>I'm a Machine Learning Engineer with 5 years of building in Python.</p>
            <div className={styles.btnRow}>
            <a href="mailto:charlie.james.bell@gmail.com" className={styles.genericBtn}>Contact me</a>
            <a href="#chat" className={`${styles.genericBtn} ${styles.animationBtn}`}>Chat</a>
            </div>
        </div>
        <img src={getImageUrl("hero/me.jpg")} alt="Photo" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}