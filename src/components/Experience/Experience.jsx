import React, { useState } from 'react';

import styles from "./Experience.module.css"

export const Experience = () => {
 
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <ul className={styles.experienceItems}>
                    <li className={styles.experienceItem}>
                        <div className={styles.experienceItemText}>
                            <h3>Dreamworld Research Inc.</h3>
                            <h4>Machine Learning Engineer (NLP) (Contract)</h4>
                            <h4><i>November 2023 to August 2024</i></h4>
                            <p><ul>
                                <li>Synthetic dataset generation and training of a chat-based Large-Language Model (LLM).</li>
                                <li>Redesigned the data schema, reducing the input tokens by 60-70%, significantly lowering latency.</li>
                                <li>Redesigned the training process, reducing the creator onboarding time from 1 week to 15 minutes and removing dependency on retraining, creating a highly-scalable system.</li>
                                <li>Created a framework for LLM tasks. The LLM can perform a given input task during a chat, e.g. send a picture. This feature became very popular, with a user requesting a picture every 1 in 5 messages.</li>
                            </ul></p>
                        </div>
                    </li>
                    <li className={styles.experienceItem}>
                        <div className={styles.experienceItemText}>
                        <h3>Untapped AI</h3>
                            <h4>Machine Learning Engineer (NLP) (Contract)</h4>
                            <h4><i>April 2023 to January 2024</i></h4>
                            <p><ul>
                                <li>Research for Fortune 500 clients, generating insights from natural language data.</li>
                                <li>Trained LLM networks with advanced methods such as RLHF to generate synthetic data.</li>
                                <li>Created chat interfaces for internal use.</li>
                                <li>Created chat transcription and summarization pipelines for internal testing in AWS.</li>
                            </ul></p>
                        </div>
                    </li>
                    <li className={styles.experienceItem}>
                        <div className={styles.experienceItemText}>
                        <h3>Bilfinger Life Science Automation GmbH</h3>
                            <h4>Software Engineer</h4>
                            <h4><i>June 2019 to December 2022</i></h4>
                            <p><ul>
                                <li>Lead software engineer on international projects with contract volumes over €1 million.</li>
                                <li>Modernized Latvia's national gas storage facility with 100% client review score.</li>
                                <li>Oversaw conception, design, implementation and testing of safety-critical automation systems.</li>
                            </ul></p>
                        </div>
                    </li>
                </ul>  
            </div>
    </section>

  );
};