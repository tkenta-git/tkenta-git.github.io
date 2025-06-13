import React from 'react';
import styles from './page.module.css';

const NFCContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* 名前表示部分を追加 */}
      <div className={styles.nameSection}>
        <div className={styles.englishName}>Kenta Tanaka</div>
        <div className={styles.japaneseName}>田中 健大</div>
      </div>

      <div className={styles.linksContainer}>
        {/* Instagram ボタン */}
        <a
          href="https://www.instagram.com/kengram_ken?igsh=MWJrb3BhMW9lMWtvdA%3D%3D&utm_source=qr" // 実際のInstagramのURLに置き換えてください
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.instagramWrapper}`}
        >
          <div className={styles.colorLayer}></div> {/* ホバー時に隠れるカラーレイヤー */}
          <div className={styles.buttonContent}>
            instagram <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>

        {/* Facebook ボタン */}
        <a
          href="https://www.facebook.com/share/1HSSehGvQd/?mibextid=wwXIfr" // 実際のFacebookのURLに置き換えてください
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.facebookWrapper}`}
        >
          <div className={styles.colorLayer}></div> {/* ホバー時に隠れるカラーレイヤー */}
          <div className={styles.buttonContent}>
            facebook <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>

        {/* Portfolio ボタン */}
        <a
          href="https://www.kenta-tanaka.com" // 実際のポートフォリオのURLに置き換えてください
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.portfolioWrapper}`}
        >
          <div className={styles.colorLayer}></div> {/* ホバー時に隠れるカラーレイヤー */}
          <div className={styles.buttonContent}>
            portfolio <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NFCContactPage;