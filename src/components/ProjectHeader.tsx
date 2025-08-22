// src/components/ProjectHeader.tsx
import React from 'react';
import styles from './ProjectHeader.module.css';

interface ProjectHeaderProps {
  title: string;
  date: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, date, description }) => {
  return (
    <div className={styles.container}>
      {/* Content container with staggered animations */}
      <div className={styles.content}>
        {/* Title and date row with opposite slide animations */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>{title}</h2>
          {date && <div className={styles.date}>{date}</div>}
        </div>
        
        {/* Description with enhanced typography */}
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ProjectHeader;