"use client"; // この行を追加
// App.tsx または任意のコンポーネントファイル

import React from 'react';
import styled, { keyframes } from 'styled-components'; // styled-componentsを使用する場合の例

// ホバー時のアニメーション
const hoverAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(2px); /* わずかに下に移動 */
  }
`;

// ボタンのスタイル
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px; /* 幅を調整 */
  height: 50px; /* 高さを調整 */
  margin: 15px auto; /* 上下のマージンと中央揃え */
  border-radius: 25px; /* 角丸 */
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #000; /* テキスト色 */
  border: 2px solid #000; /* ボタンの枠線 */
  background-color: #fff; /* 背景色 */
  position: relative; /* アニメーションのために必要 */
  transition: transform 0.1s ease-out; /* スムーズなアニメーション */
  box-shadow: 4px 4px 0px 0px #000; /* ボタンの下の影 */

  &:hover {
    transform: translateY(4px); /* ホバー時にさらに下に移動 */
    box-shadow: 0px 0px 0px 0px #000; /* ホバー時に影を消すことで、ボタンが沈んだように見せる */
  }

  /* アイコン（右上の矢印）のスタイル */
  &::after {
    content: '↗'; /* 矢印の記号 */
    margin-left: 8px;
    font-size: 16px;
  }
`;

const InstagramButton = styled(Button)`
  /* Instagram風のグラデーションボーダー */
  border: none;
  background-image: linear-gradient(to right, #833AB4, #FD1D1D, #FCB045);
  box-shadow: 4px 4px 0px 0px #000; /* ボタンの下の影 */

  &:hover {
    background-image: linear-gradient(to right, #833AB4, #FD1D1D, #FCB045); /* ホバーしてもグラデーションは維持 */
  }
`;

const FacebookButton = styled(Button)`
  border-color: #1877F2; /* Facebookの青 */
  color: #1877F2;
  box-shadow: 4px 4px 0px 0px #1877F2; /* Facebookカラーの影 */
`;

const PortfolioButton = styled(Button)`
  border-color: #000;
  color: #000;
  box-shadow: 4px 4px 0px 0px #000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 画面全体の高さ */
  background-color: #f0f0f0; /* 背景色を少し明るく */
  padding: 20px;
  box-sizing: border-box;
`;

const NameContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const EnglishName = styled.h1`
  font-family: sans-serif; /* 適宜フォントを指定 */
  font-size: 28px;
  margin-bottom: 5px;
  color: #333;
`;

const JapaneseName = styled.p`
  font-family: 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif; /* 日本語フォントを指定 */
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

const LinkTreeUI: React.FC = () => {
  return (
    <Container>
      <NameContainer>
        <EnglishName>Kenta Tanaka</EnglishName>
        <JapaneseName>田中 健大</JapaneseName>
      </NameContainer>

      <InstagramButton href="https://www.instagram.com/your_instagram_id" target="_blank" rel="noopener noreferrer">
        instagram
      </InstagramButton>

      <FacebookButton href="https://www.facebook.com/your_facebook_id" target="_blank" rel="noopener noreferrer">
        facebook
      </FacebookButton>

      <PortfolioButton href="https://www.your_portfolio_url.com" target="_blank" rel="noopener noreferrer">
        portfolio
      </PortfolioButton>
    </Container>
  );
};

export default LinkTreeUI;