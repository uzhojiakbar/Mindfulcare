import React, { useState, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 0 64px 0;
  background: transparent;
  @media (max-width: 900px) {
    padding: 36px 0 36px 0;
    max-width: 100vw;
  }
`;

const Title = styled.h2`
  font-size: 54px;
  font-family: "Manrope", sans-serif;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const FaqItem = styled.div`
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  transition: box-shadow 0.22s;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Question = styled.button`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 1.13rem;
  font-weight: 600;
  text-align: left;
  padding: 26px 20px 26px 28px;
  cursor: pointer;
  color: #18181b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.18s;
  position: relative;
  border-radius: 18px;

  /* &:hover,
  &:focus {
    background: #f1f5fa;
  } */
`;

const AnswerWrapper = styled.div`
  max-height: ${({ open }) => (open ? "600px" : "0")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  padding: ${({ open }) => (open ? "0 28px 22px 28px" : "0 28px")};
  background: transparent;
`;

const Answer = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1.04rem;
  color: #444;
  line-height: 1.7;
  margin-top: 0;
  animation: ${({ open }) => (open ? "fadeInFaq 0.45s" : "none")};
  @keyframes fadeInFaq {
    from {
      opacity: 0;
      transform: translateY(-12px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  ul,
  ol {
    margin-left: 18px;
  }
`;

const Chevron = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
  transform-origin: center;
  font-size: 1.6rem;
  color: #539cd0;
`;

const faqs = [
  {
    question:
      "Можно ли пройти курс со средне специальным медицинским образованием?",
    answer: `<p>Программа адаптирована для всех уровней специалистов. Так как в процессе обучения предусмотрено много практики, то все прошедшие обучение получат необходимые для работы практические навыки.</p>`,
  },
  {
    question:
      "Можно ли пройти курс для специалистов без медицинского образования?",
    answer: `<p>При наличии другого высшего не медицинского образования, вы также можете пройти курс. Вы получите полноценное обучение по теории и практике, наравне с другими специалистами. </p>`,
  },
  {
    question: "Какой документ я получаю по окончанию курса?",
    answer: `<p>
    Вы получаете сертификат государственного образца, программа которого утверждена в Министерстве Здравоохранения Республики Узбекистан.
    <br/>
    Для специалистов с высшим медицинским образованием - это сертификат о дополнительной специализации по направлению "Остеопатия". 
    <br/>
    Для специалистов со средне-специальным медицинским образованием - это сертификат о прослушивании и получении базовых практических навыков по курсу "Остеопатия".
    Для специалистов с высшим немедицинским образованием - сертификат о прослушивании и получении базовых практических навыков по курсу "Остеопатия".
    </p>`,
  },
  {
    question: "Могу ли я работать с сертификатом остеопата, после обучения?",
    answer: `<p>Можете во всех организациях, если у вас есть высшее медицинское образование. При наличии средне специального медицинского образования, вы можете устроится в частные медицинские учреждениях. Для специалистов успешно завершивших курс, мы гарантируем трудоустройство.</p>`,
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const answerRefs = useRef([]);

  return (
    <Section id="faq">
      <Title>Часто задаваемые вопросы</Title>
      <FaqList>
        {faqs.map((faq, idx) => (
          <FaqItem key={idx}>
            <Question
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              {faq.question}
              <Chevron open={openIdx === idx}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M6 9L11 14L16 9"
                    stroke="#539cd0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Chevron>
            </Question>
            <AnswerWrapper
              open={openIdx === idx}
              id={`faq-answer-${idx}`}
              ref={(el) => (answerRefs.current[idx] = el)}
            >
              <Answer
                open={openIdx === idx}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </AnswerWrapper>
          </FaqItem>
        ))}
      </FaqList>
    </Section>
  );
}
