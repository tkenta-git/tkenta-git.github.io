"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const NFCContactPage = () => {
  // タッチ時の状態を管理するためのstate
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // タッチ時のハンドラー
  const handleTouchStart = (buttonId: string) => {
    setActiveButton(buttonId);
    // 1秒後に元の状態に戻す
    setTimeout(() => {
      setActiveButton(null);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nameSection}>
        <div className={styles.englishName}>Kenta Tanaka</div>
        <div className={styles.japaneseName}>田中 健大</div>
      </div>

      <div className={styles.linksContainer}>
        {/* Instagram ボタン */}
        <a
          href="https://www.instagram.com/kengram_ken?igsh=MWJrb3BhMW9lMWtvdA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.instagramWrapper}`}
          onTouchStart={() => handleTouchStart('instagram')}
          style={{
            transform: activeButton === 'instagram' ? 'translateY(0)' : 'translateY(-3px)'
          }}
        >
          <div className={styles.colorLayer}></div>
          <div className={styles.buttonContent}>
            instagram <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>

        {/* Facebook ボタン */}
        <a
          href="https://www.facebook.com/share/1HSSehGvQd/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.facebookWrapper}`}
          onTouchStart={() => handleTouchStart('facebook')}
          style={{
            transform: activeButton === 'facebook' ? 'translateY(0)' : 'translateY(-3px)'
          }}
        >
          <div className={styles.colorLayer}></div>
          <div className={styles.buttonContent}>
            facebook <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>

        {/* Portfolio ボタン */}
        <a
          href="https://www.kenta-tanaka.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkWrapper} ${styles.portfolioWrapper}`}
          onTouchStart={() => handleTouchStart('portfolio')}
          style={{
            transform: activeButton === 'portfolio' ? 'translateY(0)' : 'translateY(-3px)'
          }}
        >
          <div className={styles.colorLayer}></div>
          <div className={styles.buttonContent}>
            portfolio <span className={styles.externalLinkIcon}>↗</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NFCContactPage;