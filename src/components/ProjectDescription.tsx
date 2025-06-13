import React, { useState } from 'react';
import styles from './ProjectDescription.module.css';

interface ProjectDescriptionProps {
  title: string;
  keywords: string[];
  background: string;
  objective: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ title, keywords, background, objective }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.divider} />
      
      <button 
        className={styles.toggleButton}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '詳細を非表示' : '詳細を表示'} ▼
      </button>

      {isExpanded && (
        <div className={styles.contentGrid}>
          <div className={styles.keywordsSection}>
            <h3 className={styles.sectionTitle}>Keywords</h3>
            <ul className={styles.keywordList}>
              {keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.backgroundSection}>
              <h3 className={styles.sectionTitle}>Background</h3>
              <p className={styles.sectionContent}>{background}</p>
            </div>
            <div className={styles.objectiveSection}>
              <h3 className={styles.sectionTitle}>Objective</h3>
              <p className={styles.sectionContent}>{objective}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;
