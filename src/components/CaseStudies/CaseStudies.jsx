import React, { useState } from "react";
import styles from "./CaseStudies.module.css";
import { CaseStudyPanel } from "../CaseStudyPanel/CaseStudyPanel";

const caseStudies = [
    {
        id: 1,
        title: "OhAPI — B2B AI Inference Platform",
        description: "Built a production B2B inference API for text, image, and audio that became the company's largest source of revenue.",
        context: "OhAPI was an early-stage startup building AI infrastructure for B2B clients. They needed a unified API that could handle text, image, and audio inference at scale.",
        problem: "The existing prototype was fragile, couldn't handle concurrent requests, and had no monitoring or error handling. Clients were churning due to reliability issues.",
        ownership: "End-to-end ownership of the inference platform: architecture design, implementation, deployment, monitoring, and iteration based on client feedback.",
        solution: "Built a production-grade inference API with proper queuing, rate limiting, error handling, and observability. Implemented auto-scaling and caching strategies to handle traffic spikes.",
        outcome: "The platform became the company's largest revenue source. Reduced client churn by 60% and enabled onboarding of enterprise clients with strict reliability requirements.",
        impact: "This project taught me that ML infrastructure success is measured by business outcomes, not model performance. Reliability and trust are what enterprises pay for."
    },
    {
        id: 2,
        title: "Foxy AI — Scalable Persona LLM",
        description: "Designed a persona-based LLM pipeline that increased creator onboarding capacity from 1 to ~50 per week.",
        context: "Foxy AI created personalized AI companions for content creators. Each creator needed a custom persona that matched their voice and style.",
        problem: "Creating each persona required manual prompt engineering and extensive testing. The process took days per creator, limiting growth to about 1 new creator per week.",
        ownership: "Owned the persona pipeline from data collection through deployment. Worked directly with creators and the product team to define quality standards.",
        solution: "Built an automated pipeline that extracted persona traits from creator content, generated and tested prompts systematically, and validated output quality against defined metrics.",
        outcome: "Reduced persona creation time from days to hours. Increased onboarding capacity from ~1 to ~50 creators per week while maintaining quality standards.",
        impact: "Demonstrated that LLM products can scale without sacrificing personalization. The pipeline became a key differentiator in creator acquisition."
    },
    {
        id: 3,
        title: "Upselling LLM — Revenue Optimization",
        description: "Trained and deployed a customer-facing upselling LLM, currently live and undergoing A/B testing across B2B clients.",
        context: "A B2B SaaS company wanted to increase revenue per customer by intelligently suggesting upgrades and add-ons during customer interactions.",
        problem: "Existing rule-based upselling was ineffective and often annoying to customers. The team needed a more natural, context-aware approach.",
        ownership: "Owned the ML side: training data curation, model fine-tuning, evaluation framework, and production deployment. Collaborated with product on UX integration.",
        solution: "Fine-tuned an LLM on successful sales conversations to generate contextually appropriate upsell suggestions. Built an evaluation framework to measure both conversion and customer satisfaction.",
        outcome: "Currently live in production and undergoing A/B testing. Early results show improved conversion rates without negative impact on customer satisfaction scores.",
        impact: "Showed that customer-facing LLMs can drive revenue when designed with user experience as a primary constraint, not just conversion optimization."
    }
];

export const CaseStudies = ({ onPanelChange }) => {
    const [selectedStudy, setSelectedStudy] = useState(null);

    const handleOpenStudy = (study) => {
        setSelectedStudy(study);
        onPanelChange?.(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseStudy = () => {
        setSelectedStudy(null);
        onPanelChange?.(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <section className={styles.container} id="case-studies">
                <h2 className={styles.sectionTitle}>Case Studies</h2>
                <div className={styles.cards}>
                    {caseStudies.map((study) => (
                        <div key={study.id} className={styles.card}>
                            <h3 className={styles.cardTitle}>{study.title}</h3>
                            <p className={styles.cardDescription}>{study.description}</p>
                            <button
                                type="button"
                                className={styles.cardLink}
                                onClick={() => handleOpenStudy(study)}
                            >
                                Read case study
                                <span className={styles.arrow}>&rarr;</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <CaseStudyPanel
                caseStudy={selectedStudy}
                isOpen={!!selectedStudy}
                onClose={handleCloseStudy}
            />
        </>
    );
};
