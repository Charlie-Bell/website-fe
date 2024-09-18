import React, { useState } from 'react';

import styles from "./About.module.css"
import { getImageUrl } from '../../utils';


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.aboutItems}>
                    <h3>I take care of your ML pipelines.</h3>
                    <p>From development to production. I have experience designing and scaling ML and AI solutions with specialty in NLP. If you want to know more, just ask C-Bot in the chat below!</p>
                </div>
            </div>
        </section>
    );
};