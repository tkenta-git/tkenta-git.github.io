import React from 'react';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  date: string; // kept for compatibility but use metaRight
  content: React.ReactNode;
  link?: string;
  metaLeft?: string;
  metaRight?: string; // typically a date like "Jun 2025"
}

export default function ProjectCard({
  title,
  description,
  date,
  content,
  link,
  metaLeft,
  metaRight,
}: ProjectCardProps) {
  const rightMeta = metaRight ?? date;

  const CardInner = (
    <div className={styles.card}>
      {/* Top rule and heading */}
      <div className={styles.rule} />
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      {/* Middle rule (light gray) */}
      <div className={styles.ruleMid} />

      {/* Media/content */}
      <div className={styles.cardContent}>{content}</div>

      {/* Description */}
      <div className={styles.cardBody}>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Meta row */}
      <div className={styles.metaRow}>
        <span className={styles.metaLeft}>{metaLeft}</span>
        <span className={styles.metaRight}>{rightMeta}</span>
      </div>

      {/* Bottom rule */}
      <div className={styles.ruleBottom} />
    </div>
  );

  if (link) {
    return (
      <a href={link} className={styles.cardLink}>
        {CardInner}
      </a>
    );
  }

  return CardInner;
}
