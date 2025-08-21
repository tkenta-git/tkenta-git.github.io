import React from 'react';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  footer: string;
  content: React.ReactNode;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  date,
  footer,
  content,
  link
}: ProjectCardProps) {
  const CardContent = () => (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
      </div>
      
      <div className={styles.cardContent}>
        {content}
      </div>
      
      <div className={styles.cardFooter}>
        <p className={styles.description}>{description}</p>
        <span className={styles.footer}>{footer}</span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className={styles.cardLink}>
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
