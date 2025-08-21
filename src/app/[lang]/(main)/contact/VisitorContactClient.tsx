"use client";
import React from 'react';
import ProjectHeader from '../../../components/ProjectHeader';
import { useTranslations } from '../../i18n';

export default function VisitorContactClient() {
  const { t } = useTranslations();
  return (
    <main>
      <section>
        <div className="section-container">
          <div className="section-rule" />
          <ProjectHeader 
            title={t('home.contact.title')}
            date=""
            description={t('home.contact.description')}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem 0',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '1.1rem' }}>{t('home.contact.letsTalk')}</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #111111',
              borderRadius: '0px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              maxWidth: '100%'
            }}>
              <span style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                color: '#333',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                tb1.kenta-research@outlook.com
              </span>
              <a 
                href="mailto:tb1.kenta-research@outlook.com"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#e0e0e0',
                  color: '#000',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#cccccc')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
              >
                contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
