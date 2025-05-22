import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  background: #f8fafc;
  border-top: 1px solid #e3e8ef;
  padding: 0;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 44px 0 18px 0;
  gap: 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
    padding: 32px 0 10px 0;
  }
`;

const FooterBrand = styled.div`
  flex: 1.2;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 10px;
  }
`;

const FooterLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  gap: 15px;

  user-select: none;
  cursor: pointer;

  span {
    color: var(--logo-text-color);
    font-weight: 700;
    font-family: "Manrope";
    font-size: 16px;
  }
  img {
    width: 29px;
    height: 100%;
  }

  @media (max-width: 1440px) {
    span {
      font-size: 14px;
    }
    img {
      width: 25px;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    img {
      width: 20px;
      height: 100%;
    }
    span {
      font-size: 11px;
    }
  }
`;

const FooterTitle = styled.div`
  color: #3a8bb7;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 2px;
`;

const FooterDesc = styled.div`
  color: #7b8fa6;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  margin-bottom: 0;
`;

const FooterNav = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    margin-bottom: 10px;
  }
`;

const NavTitle = styled.div`
  color: #7b8fa6;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 0.01em;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 32px;
  font-size: 15px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  color: #222;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const FooterSocial = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  @media (max-width: 900px) {
    align-items: center;
    margin-top: 12px;
  }
`;

const SocialTitle = styled.div`
  color: #7b8fa6;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  margin-bottom: 8px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eaf6fb;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    transition: background 0.18s;
    &:hover {
      background: #61b6e6;
    }
    svg,
    img {
      width: 22px;
      height: 22px;
      display: block;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #e3e8ef;
  margin-top: 18px;
  padding: 14px 0 10px 0;
  text-align: center;
  color: #7b8fa6;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2px;
    font-size: 12px;
    padding: 10px 0 8px 0;
  }
`;

const FooterDev = styled.a`
  color: #3a8bb7;
  font-weight: 500;
  text-decoration: none;
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterMain>
          <FooterBrand>
            <FooterLogo href="/#home">
              <img src="/logo.svg" alt="logo" />
              <span>
                Национальный <br />
                учебно-научный центр остеопатии <br /> имени С.В.Новосельцева
              </span>
            </FooterLogo>
            {/* <FooterTitle>
              Национальный учебно-научный центр остеопатии имени
              С.В.Новосельцева
            </FooterTitle> */}
            <FooterDesc>
              © Национальный учебно-научный центр остеопатии им.
              С.В.Новосельцева, 2025
            </FooterDesc>
          </FooterBrand>
          <FooterNav>
            <NavTitle>НАВИГАЦИЯ</NavTitle>
            <NavLinks>
              <a href="#about">О нас</a>
              <a href="#why">Почему мы?</a>
              <a href="#programs">Программы</a>
              <a href="#teachers">Учителя</a>
              <a href="#reviews">Отзывы</a>
              <a href="#faq">FAQ</a>
            </NavLinks>
          </FooterNav>
          <FooterSocial>
            <SocialTitle>Наши соц сети</SocialTitle>
            <SocialLinks>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Instagram.svg" alt="Instagram" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <img src="/Telegram.svg" alt="Telegram" />
              </a>
            </SocialLinks>
          </FooterSocial>
        </FooterMain>
        <FooterBottom>
          <span>Дизайн, создание и разработка</span>
          <FooterDev
            href="https://abex.uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/abex.svg"
              alt="abex"
              style={{ height: 16, width: "auto" }}
            />
            abex
          </FooterDev>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
}
