'use client';

import { useTranslations } from '../i18n';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectCard from '@/components/ProjectCard';

export default function HomeClient() {
  const { t, lang } = useTranslations();
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2>{t('home.hero.title')}</h2>
          <h3>{t('home.hero.subtitle')}</h3>
          
          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href={`/${lang}/contact`} className="cta-primary">
              {t('home.hero.cta.primary')}
            </a>
            <a href={`/${lang}/contact`} className="cta-secondary">
              {t('home.hero.cta.secondary')} →
            </a>
          </div>
        </div>
      </section>

      {/* --- Project Cards Section --- */}
      <section className="project-cards-container">
        {/* SFC Hello Cycling Card */}
        <ProjectCard
          title="SFC通学路上の Hello Cyclingスポット可視化"
          description="慶應義塾大学SFC一湘南台駅付近のHello Cyclingスポット可視化して、通学路上でのシェアサイクル利用をスムーズに。"
          date="May 2025"
          content={
            <img
              src="/shannon.gif"
              alt="Project preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          metaLeft="mapbox"
          metaRight="Jun 2025"
          link={`/${lang}/work/observable/cycling`}
        />

        {/* Shannon Diversity Index Card */}
        <ProjectCard
          title="シャノン多様性指数計算機とビジュアライザー"
          description="情報理論の父シャノンのエントロピー由来の多様性指数を、生態・環境・微生物・経済・社会・都市など多領域等の理解促進へ可視化・対話化として制作。"
          date="Jun 2025"
          content={
            <img
              src="/shannon.gif"
              alt="Project preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          metaRight="Jun 2025"
          link={`/${lang}/work/observable/shannon`}
        />

        {/* Medical Expenses in Japan Card */}
        <ProjectCard
          title="日本の医療費分析"
          description="日本における重大な社会問題である社会保障費急増を視覚的にわかりやすく解説。"
          date="Apr 2025"
          content={
            <img
              src="/shannon.gif"
              alt="Project preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
          metaRight="Apr 2025"
          link={`/${lang}/work/observable/medicalexpenses`}
        />
      </section>

      {/* --- Contact Form Section --- */}
      <section id="contact">
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
        </div>
      </section>
    </main>
  );
} 