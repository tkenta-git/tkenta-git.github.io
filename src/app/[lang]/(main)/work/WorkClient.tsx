'use client';
import { useTranslations } from '../../i18n';

export default function WorkClient() {
  const { t } = useTranslations();
  return (
    <main className="work-main">
      <section className="hero">
        <div className="hero-content">
          <h2>{t('work.hero.title')}</h2>
          <h3>{t('work.hero.subtitle')}</h3>
        </div>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
          width="100%"
          height="600"
          frameBorder="1"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title={t('work.iframe.cycling')}
        ></iframe>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title={t('work.iframe.shannon')}
        ></iframe>
      </section>
      <section className="notebook-container">
        <iframe
          src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid #eeeeee', borderRadius: '0px' }}
          title={t('work.iframe.medical')}
        ></iframe>
      </section>
    </main>
  );
} 