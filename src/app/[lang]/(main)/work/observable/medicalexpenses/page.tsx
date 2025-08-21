import ProjectHeader from '../../../../components/ProjectHeader';

export default function MedicalExpensesPage() {
  return (
    <main>
      <div className="section-container">
        <div className="section-rule" />
        <ProjectHeader
          title="日本の医療費分析"
          date="Apr 2025"
          description="日本における重大な社会問題である社会保障費急増を視覚的にわかりやすく解説。"
        />
        
        <div style={{ marginTop: '2rem' }}>
          <iframe
            src="https://observablehq.com/embed/@kenta-tanaka/medical-expences-in-japan"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: '1px solid #e6e6e6', borderRadius: '0px' }}
            title="Medical Expenses in Japan"
          />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}
