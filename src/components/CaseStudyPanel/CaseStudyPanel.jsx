import React from 'react';
import styles from './CaseStudyPanel.module.css';

export const CaseStudyPanel = ({ caseStudy, isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop for mobile */}
            <div
                className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
                onClick={onClose}
            />

            {/* Panel */}
            <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
                <div className={styles.header}>
                    <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{caseStudy?.title}</h2>

                    {caseStudy?.context && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Context</h3>
                            <p>{caseStudy.context}</p>
                        </section>
                    )}

                    {caseStudy?.problem && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Problem</h3>
                            <p>{caseStudy.problem}</p>
                        </section>
                    )}

                    {caseStudy?.ownership && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>What I Owned</h3>
                            <p>{caseStudy.ownership}</p>
                        </section>
                    )}

                    {caseStudy?.solution && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>What I Built</h3>
                            <p>{caseStudy.solution}</p>
                        </section>
                    )}

                    {caseStudy?.outcome && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Outcome</h3>
                            <p>{caseStudy.outcome}</p>
                        </section>
                    )}

                    {caseStudy?.impact && (
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>Why It Mattered</h3>
                            <p>{caseStudy.impact}</p>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
};
