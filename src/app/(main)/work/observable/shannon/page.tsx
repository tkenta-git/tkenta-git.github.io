import ProjectHeader from '../../../../components/ProjectHeader';

export default function ShannonPage() {
  return (
    <main>
      <div className="section-container">
        <div className="section-rule" />
        <ProjectHeader
          title="シャノン多様性指数計算機とビジュアライザー"
          date="Jun 2025"
          description="情報理論の父シャノンのエントロピー由来の多様性指数を、生態・環境・微生物・経済・社会・都市など多領域等の理解促進へ可視化・対話化として制作。"
        />
        
        <div style={{ marginTop: '2rem' }}>
          <iframe
            src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 'none' }}
            title="Shannon Diversity Index Calculator & Visualizer"
          />
        </div>
      </div>
    </main>
  );
}
