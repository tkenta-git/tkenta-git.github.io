import ProjectHeader from '../../../../components/ProjectHeader';

export default function ShannonPage() {
  return (
    <main>
      <div className="section-container">
        <div className="section-rule" />
        <ProjectHeader
          title="Shannon Diversity Index Calculator & Visualizer"
          date="Jun 2025"
          description="An interactive tool to understand the concept of biodiversity through the Shannon Diversity Index. Adjust species populations and observe how diversity and evenness change in real-time."
        />
        
        <div style={{ marginTop: '2rem' }}>
          <iframe
            src="https://observablehq.com/embed/@kenta-tanaka/shannon-diversity-index-calculator-visualizer"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: '1px solid #e6e6e6', borderRadius: '0px' }}
            title="Shannon Diversity Index Calculator & Visualizer"
          />
        </div>
      </div>
    </main>
  );
}
