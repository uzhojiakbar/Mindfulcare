import React, { useState } from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  padding: 0;
`;

const FooterContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 600px) {
    padding: 0 0px;
  }
`;

const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 44px 0 18px 0;
  gap: 100px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    padding: 10px;
    /* padding: 32px 0 10px 0; */
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    /* padding: 24px 0 0 0; */
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 10px;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    text-align: left;
    gap: 8px;
    padding-left: 0;
    width: 100%;
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
  @media (max-width: 600px) {
    span {
      font-size: 13px;
    }
    img {
      width: 18px;
    }
  }
`;

const FooterDesc = styled.div`
  color: #71717a;
  font-size: 16px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 2px;
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 900px) {
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    margin-top: 18px;
    padding-left: 0;
    width: 100%;
    align-items: flex-start;
  }
`;

const NavTitle = styled.div`
  color: #94a3b8;
  font-size: 13px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 0.01em;
  min-width: 110px;
  @media (max-width: 600px) {
    font-size: 11px;
    margin-bottom: 6px;
    text-align: left;
  }
`;

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px 18px;
  font-size: 16px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  color: #222;
  margin-top: 2px;

  a {
    color: #1a1a1a;
    text-decoration: none;
    padding: 0 0 2px 0;
    border-bottom: 2px solid transparent;
    transition: color 0.18s, border-color 0.18s;
    letter-spacing: 0.01em;
    line-height: 1.7;
    font-family: "Manrope", sans-serif;
    font-weight: 400;

    &:hover,
    &:focus {
      color: #94a3b8;
    }
    &:active {
      color: #94a3b8;
      border-bottom: 2px solid #94a3b8;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 8px 0;
    a {
      padding: 0 0 2px 0;
      font-size: 15px;
    }
  }
  @media (max-width: 600px) {
    font-size: 13px;
    gap: 6px 18px;
    margin-bottom: 0;
    margin-top: 0;
    a {
      font-size: 13px;
    }
    width: 100%;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 22px;
  @media (max-width: 900px) {
    align-items: center;
    margin-top: 12px;
  }
  @media (max-width: 600px) {
    align-items: center;
    margin-top: 18px;
    gap: 10px;
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  min-width: 105px;
  gap: 20px;
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
      display: block;
    }
  }
  @media (max-width: 600px) {
    gap: 12px;
    a {
      width: 40px;
      height: 40px;
    }
    img,
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const FooterBottom = styled.div`
  padding: 24px 0 18px 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 50px 0 10px 0;
    align-items: center;
  }
`;

const FooterBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  line-height: 1.2;
  margin-bottom: 0;
`;

const FooterBottomText = styled.span`
  color: #61b6e6;
  font-size: 18px;
  font-family: "Involve", sans-serif;
  font-weight: 600;
  letter-spacing: 0.01em;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const FooterBottomAbex = styled.a`
  color: #61b6e6;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 0;
  margin-top: 0;
  @media (max-width: 600px) {
    font-size: 15px;
    gap: 4px;
  }
  img {
    height: 18px;
    width: auto;
    @media (max-width: 600px) {
      height: 15px;
    }
  }
`;

const FooterBottomHeart = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 4px;
  vertical-align: middle;
  @media (max-width: 600px) {
    width: 15px;
    height: 15px;
    margin: 0 2px;
  }
`;

export default function Footer() {
  const [abexLink, setAbexLink] = useState("");

  React.useEffect(() => {
    fetch("https://abexlab-links.vercel.app/api/currentLink")
      .then((res) => res.json())
      .then((data) => {
        if (data?.link1) setAbexLink(data.link1);
      })
      .catch(() => {});
  }, []);

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
            <FooterDesc>
              © Национальный учебно-научный центр остеопатии им. <br />
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
            <NavTitle>НАШИ СОЦ.СЕТИ</NavTitle>
            <SocialLinks>
              <a
                title="https://www.instagram.com/osteo_university?igsh=MTVpcHF6dmY0OTF4ag=="
                href="https://www.instagram.com/osteo_university?igsh=MTVpcHF6dmY0OTF4ag=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Instagram.svg" alt="Instagram" />
              </a>
              <a
                title="https://www.instagram.com/biolife_uz?igsh=MXJnNHdtaXd6YXVocA=="
                href="https://www.instagram.com/biolife_uz?igsh=MXJnNHdtaXd6YXVocA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Instagram.svg" alt="Instagram" />
              </a>
              {/* <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <img src="/Telegram.svg" alt="Telegram" />
              </a> */}
            </SocialLinks>
          </FooterSocial>
        </FooterMain>
        <FooterBottom>
          <FooterBottomRow>
            <FooterBottomText>Дизайн создан с</FooterBottomText>
            <FooterBottomHeart src="/Hearts.svg" alt="heart" />
          </FooterBottomRow>
          <FooterBottomRow>
            <FooterBottomText>и разработан</FooterBottomText>
            <FooterBottomAbex
              href={abexLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Abex.svg" alt="abex" />
            </FooterBottomAbex>
          </FooterBottomRow>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
}
