import ProjectHeader from '../../../../components/ProjectHeader';

export default function CyclingPage() {
  return (
    <main>
      <div className="section-container">
        <div className="section-rule" />
        <ProjectHeader
          title="SFC通学路上の Hello Cyclingスポット可視化"
          date="May 2025"
          description="慶應義塾大学SFC一湘南台駅付近のHello Cyclingスポット可視化して、通学路上でのシェアサイクル利用をスムーズに。"
        />
        
        <div style={{ marginTop: '2rem' }}>
          <iframe
            src="https://observablehq.com/embed/@kenta-tanaka/sfc-hello-cycling"
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: '1px solid #e6e6e6', borderRadius: '0px' }}
            title="SFC Hello Cycling"
          />
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}
