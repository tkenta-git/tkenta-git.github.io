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
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    if (!hasAnimated) {
      setHasAnimated(true);
    }
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.divider} />
      
      <button 
        className={`${styles.toggleButton} ${isExpanded ? styles.expanded : ''} ${isAnimating ? styles.animating : ''}`}
        onClick={handleToggle}
      >
        <span className={styles.buttonText}>
          {isExpanded ? '詳細を非表示' : '詳細を表示'}
        </span>
        <span className={`${styles.arrow} ${isExpanded ? styles.rotated : ''}`}>▼</span>
      </button>

      {isExpanded && (
        <div className={`${styles.contentGrid} ${hasAnimated ? styles.hasAnimated : ''}`}>
          <div className={`${styles.keywordsSection} ${styles.staggered1}`}>
            <h3 className={`${styles.sectionTitle} ${styles.titleEnter}`}>Keywords</h3>
            <ul className={styles.keywordList}>
              {keywords.map((keyword, index) => (
                <li 
                  key={index} 
                  className={styles.keywordItem}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.detailsSection} ${styles.staggered2}`}>
            <div className={`${styles.backgroundSection} ${styles.staggered3}`}>
              <h3 className={`${styles.sectionTitle} ${styles.titleEnter}`}>Background</h3>
              <p className={`${styles.sectionContent} ${styles.contentEnter}`}>{background}</p>
            </div>
            <div className={`${styles.objectiveSection} ${styles.staggered4}`}>
              <h3 className={`${styles.sectionTitle} ${styles.titleEnter}`}>Objective</h3>
              <p className={`${styles.sectionContent} ${styles.contentEnter}`}>{objective}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;
