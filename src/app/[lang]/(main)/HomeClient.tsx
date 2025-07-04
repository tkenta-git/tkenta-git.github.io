'use client';

import { useTranslations } from '../i18n';
import ProjectHeader from '../../../components/ProjectHeader';

export default function HomeClient() {
  const { t, lang } = useTranslations();
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>{t('home.hero.title')}</h2>
          <h3>{t('home.hero.subtitle')}</h3>
          <p className="role">{t('home.hero.role')}</p>
        </div>
      </section>

      {/* --- 可視化エリア 新デザイン (Shannon Diversity Index) --- */}
      <section className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title={t('home.shannon.title')}
          date={t('home.shannon.date')}
          description={t('home.shannon.description')}
        />
        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '90wh', margin: '0 auto', borderRadius: '0px', overflow: 'hidden' }}
        >
          <a
            href={`/${lang}/work/observable`}
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '90vw',
              height: '100%',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <img
              src="/shannon.gif"
              alt="Shannon Diversity Index Visualization"
              width={1500}
              height={600}
              style={{
                width: '100%',
                maxWidth: '100vw',
                height: 'auto',
                display: 'block',
                borderRadius: '0px',
              }}
            />
            <div
              className="hover-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#060606',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
                zIndex: 2,
                borderRadius: '0px',
                padding: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'left',
                  gap: '1rem',
                  color: 'white',
                  fontSize: '10rem',
                  fontWeight: 400,
                  letterSpacing: '0.00em',
                  padding: '3rem 0 0 -3rem',
                }}
              >
                {t('home.shannon.try')}
              </div>
            </div>
          </a>
        </div>
        <style jsx>{`
          a:hover .hover-overlay {
            opacity: 0.85 !important;
          }
        `}</style>
      </section>

      {/* --- Cycling Project Section --- */}
      <section id="notebook-cycling" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title={t('home.cycling.title')}
          date={t('home.cycling.date')}
          description={t('home.cycling.description')}
        />
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
          width="100%"
          height="600"
          frameBorder="1"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title={t('home.cycling.iframeTitle')}
        ></iframe>
        <div id="obs-medical"></div>
      </section>

      {/* --- Shannon Diversity Index (Embedded) Section --- */}
      <section id="notebook-shannon" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title={t('home.shannonEmbedded.title')}
          date={t('home.shannonEmbedded.date')}
          description={t('home.shannonEmbedded.description')}
        />
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title={t('home.shannonEmbedded.iframeTitle')}
        ></iframe>
      </section>

      {/* --- Medical Expenses in Japan Section --- */}
      <section id="notebook" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
        <ProjectHeader
          title={t('home.medical.title')}
          date={t('home.medical.date')}
          description={t('home.medical.description')}
        />
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
          width="100%"
          height="600"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          frameBorder="0"
          title={t('home.medical.iframeTitle')}
        ></iframe>
      </section>

      {/* --- Contact Form Section --- */}
      <section id="contact" className="notebook-container" style={{ maxWidth: '100vw', margin: '0 auto', padding: '1rem 0' }}>
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
            borderRadius: '50px',
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
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cccccc'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            >
              contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 