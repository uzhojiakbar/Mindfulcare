"use client";

import styled from "styled-components";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;

  gap: 80px;
  background: var(--background);

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    /* text-align: center; */
  }
`;

const TextBlock = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    font-size: 22px;
    color: #111;
    margin-bottom: 10px;
    font-weight: 700;
    font-family: "Manrope", sans-serif;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: #111;
    font-family: "Manrope";
    margin-bottom: 20px;
    line-height: 1.3;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    color: #333;
  }

  @media (max-width: 768px) {
    gap: 10px;

    h2 {
      font-size: 24px;
    }

    p {
      margin-top: 24px;
      font-size: 18px;
    }
  }
`;

const ImageWrapper = styled.div`
  max-width: 400px;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default function AboutSection() {
  return (
    <Section className="page1-container" id="about">
      <ImageWrapper>
        <Image
          src="/about.svg"
          alt="About illustration"
          width={400}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </ImageWrapper>

      <TextBlock>
        <h4>О нас</h4>
        <h2>
          Познакомьтесь с нашей
          <br />
          миссией и командой
        </h2>
        <p>
          Центр имени С.В. Новосельцева — ведущая платформа в области
          остеопатического образования, где сочетаются академическая строгость,
          клиническая практика и научные исследования. Мы обучаем будущих
          остеопатов по современным международным стандартам.
        </p>
      </TextBlock>
    </Section>
  );
}
