import Image from 'next/image';

export default function About() {
  return (
    <main className="about-main">
      {/* ===== Intro ===== */}
      <section className="about-intro">
        <div className="about-inner">
          {/* 左カラム：プロフィール写真 */}
          {/* publicフォルダに your-photo.jpg という名前で画像をおいてください */}
          <Image src="/your-photo.jpg" 
               alt="Kenta Tanaka" 
               width={240}
               height={240}
               className="about-photo" />
      
          {/* 右カラム：テキスト */}
          <div className="about-text">
            <p className="headline">
              Kenta Tanaka is a Designer<br />
              improving experience with computer interactions.
            </p>
            <p className="subhead">welcome to my portfolio</p>
            <p className="lead">
              I’m passionate about changing the world with design power.
            </p>
            <p className="description">
              Currently, I’m pursuing my undergraduate degree in environment and 
              information studies at Keio University, Japan, which is one of the top 
              universities in the field of Internet, and I’m looking for a 2027 
              full-time position.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* ===== What I do ===== */}
      <section className="what-i-do">
        <div className="what-grid">
          <div className="label">What I do</div>
          <ul className="list-en">
            <li>Interaction Design</li>
            <li>User Experience</li>
            <li>Prototyping</li>
            <li>Coding</li>
          </ul>
          <ul className="list-ja">
            <li>インタラクションデザイン</li>
            <li>ユーザーエクスペリエンス</li>
            <li>プロトタイピング</li>
            <li>コーディング</li>
          </ul>
        </div>
      </section>

      <hr />

      {/* ===== Education ===== */}
      <section className="education">
        <div className="what-grid">
          <div className="label">Education</div>
          <ul className="list-en">
            <li>Keio University</li>
            <li>Bachelor of Arts in Environment and Information Studies</li>
            <li>Apr. 2023 - Present (Mar. 2027)</li>
          </ul>
          <ul className="list-ja">
            <li>慶應義塾大学</li>
            <li>環境情報学部3年</li>
            <li>2023年4月ー2027年3月卒業予定</li>
          </ul>
        </div>
      </section>

      <hr />

      {/* ===== What I use ===== */}
      <section className="what-i-use">
        <div className="what-grid">
          <div className="label">What I Use</div>
          <ul className="list-en">
            <li>Design</li>
          </ul>
          <ul className="list-ja">
            <li>UI/UX</li>
            <li>Figma</li>
            <li>Adobe CC</li>
            <li>WordPress</li>
          </ul>
          <div className="label"></div>
          <ul className="list-en">
            <li>Coding</li>
          </ul>
          <ul className="list-ja">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>R</li>
            <li>MySQL</li>
          </ul>
        </div>
      </section>

      <hr />

      {/* ===== Qualification ===== */}
      <section className="what-i-use">
        <div className="what-grid">
          <div className="label">Qualification</div>
          <ul className="list-en">
            <li>English C1</li>
            <li>German B1</li>
          </ul>
          <ul className="list-ja">
            <li>英語　C1</li>
            <li>ドイツ語 B1</li>
          </ul>
        </div>
      </section>
    </main>
  );
}