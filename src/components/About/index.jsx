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
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    font-size: 22px;
    color: #111;
    margin-bottom: 10px;
    font-weight: 700;
    line-height: 100%;
    font-family: "Manrope", sans-serif;
  }

  h2 {
    font-size: 54px;
    font-weight: 700;
    color: #111;
    font-family: "Manrope", sans-serif;
    margin-bottom: 20px;
    line-height: 110%;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 110%;

    font-family: "Manrope", sans-serif;
    color: #333;
  }

  @media (max-width: 768px) {
    gap: 10px;

    h4 {
      font-size: 24px;
      line-height: 100%;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 14px;
    }

    p {
      font-size: 14px;
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
    <Section data-aos="fade-down" className="page1-container" id="about">
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
