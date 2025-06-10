// src/components/ProjectHeader.tsx
import React from 'react';

interface ProjectHeaderProps {
  title: string;
  date: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, date, description }) => {
  return (
    <>
      {/* 区切り線 */}
      <div style={{
        borderTop: '2px solid #111',
        width: '100%',
        maxWidth: '100vw', // グローバルCSSで定義済みの `notebook-container` に合わせて100%でも良いですが、念のため
        margin: '0 auto 1.5rem auto'
      }} />
      {/* タイトル・説明・日付 */}
      <div style={{ marginBottom: '1.5rem' }}>
        {/* 新しいFlexboxコンテナ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, textAlign: 'left' }}>{title}</h2>
          <div style={{ fontSize: '1.5rem', color: '#000' }}>{date}</div>
        </div>
        {/* 3行目の要素はそのまま */}
        <div style={{ fontSize: '1.1rem', color: '#000', margin: '0.5rem 0 3rem 0', textAlign: "left" }}>{description}</div>
      </div>
    </>
  );
};

export default ProjectHeader;