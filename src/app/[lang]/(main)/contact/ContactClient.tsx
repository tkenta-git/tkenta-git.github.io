"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslations } from '../../i18n';

// ホバー時のアニメーション
const hoverAnimation = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(2px); }
`;

// ボタンのスタイル
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: 15px auto;
  border-radius: 25px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  border: 2px solid #000;
  background-color: #fff;
  position: relative;
  transition: transform 0.1s ease-out;
  box-shadow: 4px 4px 0px 0px #000;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0px 0px 0px 0px #000;
  }
  &::after {
    content: '↗';
    margin-left: 8px;
    font-size: 16px;
  }
`;

const InstagramButton = styled(Button)`
  border: none;
  background-image: linear-gradient(to right, #833AB4, #FD1D1D, #FCB045);
  box-shadow: 4px 4px 0px 0px #000;
  &:hover {
    background-image: linear-gradient(to right, #833AB4, #FD1D1D, #FCB045);
  }
`;

const FacebookButton = styled(Button)`
  border-color: #1877F2;
  color: #1877F2;
  box-shadow: 4px 4px 0px 0px #1877F2;
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
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
`;

const NameContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const EnglishName = styled.h1`
  font-family: sans-serif;
  font-size: 28px;
  margin-bottom: 5px;
  color: #333;
`;

const JapaneseName = styled.p`
  font-family: 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #333;
`;

const ContactClient: React.FC = () => {
  const { t } = useTranslations();
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

export default ContactClient; 