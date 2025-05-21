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
  font-size: 28px;
  font-family: "Manrope";
  font-weight: 700;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
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
  padding: 26px 54px 26px 28px;
  cursor: pointer;
  color: #18181b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.18s;
  position: relative;
  border-radius: 18px;

  &:hover,
  &:focus {
    background: #f1f5fa;
  }
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
  position: absolute;
  right: 28px;
  top: 50%;
  transform-origin: center;
  font-size: 1.6rem;
  color: #539cd0;
`;

const faqs = [
  {
    question: "What is a mental health consultant?",
    answer: `<p>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus. A risus donec eget enim aliquet integer cursus et. Phasellus ac augue ultricies sem aliquam faucibus sem non volutpat.</p>`,
  },
  {
    question: "What services do you offer as a mental health consultant?",
    answer: `<ul>
      <li>Individual counseling</li>
      <li>Group therapy</li>
      <li>Workshops and seminars</li>
      <li>Corporate wellness programs</li>
    </ul>`,
  },
  {
    question:
      "How do you tailor your approach to meet the individual needs of clients?",
    answer: `<p>Each client receives a personalized plan based on their unique needs, goals, and preferences. We use evidence-based methods and regular feedback to ensure the best outcomes.</p>`,
  },
  {
    question:
      "What strategies do you use to promote mental wellness in organizations?",
    answer: `<p>We offer training, policy development, and ongoing support to foster a healthy workplace culture and address mental health proactively.</p>`,
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
