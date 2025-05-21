import React, { useState, useRef } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  background: #f5f6fa;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 4px 18px 0 rgba(83, 156, 208, 0.1);
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 600px) {
    width: 90vw;
    min-width: 90vw;
    max-width: 90vw;
    min-height: 220px;
    height: auto;
    margin: 0 auto;
    background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
  }

  &:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 600px) {
    .overlay {
      opacity: 1 !important;
      pointer-events: auto;
    }
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 362px;
  object-fit: cover;
  border-radius: 22px 22px 0 0;
  background: #eaeaea;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
  border-radius: 22px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 28px;
  z-index: 2;

  @media (max-width: 600px) {
    opacity: 1 !important;
    pointer-events: auto;
    position: static;
    background: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    height: 350px;
  }
`;

const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 18px;
  border: 4px solid #fff;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(83, 156, 208, 0.1);

  @media (max-width: 600px) {
    width: 160px;
    height: 160px;
    margin-top: 14px;
  }
`;

const Name = styled.div`
  margin-top: 40px;
  font-size: 19px;
  font-weight: 700;
  color: #fff;
  padding: 0 20px;
  text-align: left;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.01em;

  @media (max-width: 600px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 18px;
  justify-content: flex-start;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  padding: 0 20px;

  @media (max-width: 600px) {
    margin-top: 8px;
    gap: 8px;
  }
`;

const LinkButton = styled.a`
  background: #fff;
  color: #61b6e6;
  border-radius: 16px;
  padding: 10px 26px 10px 18px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 1px 4px 0 rgba(83, 156, 208, 0.08);
  position: relative;
  overflow: hidden;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
    border-radius: 16px;
  }

  &:hover {
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(83, 156, 208, 0.18);
  }
  &:hover::after {
    opacity: 1;
    animation: btn-bg-anim 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  img {
    z-index: 1;
    width: 22px;
    height: 22px;
    transition: filter 0.2s;
    filter: grayscale(0%) brightness(1) saturate(1);
  }

  &:hover img {
    filter: brightness(0) invert(1) drop-shadow(0 0 2px #fff);
  }

  span {
    z-index: 1;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  @keyframes btn-bg-anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  padding: 40px 20px;

  @media (max-width: 600px) {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    gap: 18px;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: 601px) {
    display: none;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
`;

const CarouselCard = styled.div`
  flex: 0 0 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 0;
`;

const CarouselControls = styled.div`
  display: none;
`;

const CarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 14px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Manrope";
  font-weight: 700;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const NavBtn = styled.button`
  background: #f5f6fa;
  border: 1.5px solid #61b6e6;
  color: #61b6e6;
  border-radius: 18px;
  width: 110px;
  height: 56px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border-color 0.18s,
    box-shadow 0.18s;
  box-shadow: 0 2px 8px 0 rgba(83, 156, 208, 0.07);
  position: relative;
  overflow: hidden;
  outline: none;
  padding: 15px 83px;

  &:active {
    background: #eaf6fb;
  }

  &:hover,
  &:focus {
    background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
    border-color: #539cd0;
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(83, 156, 208, 0.18);
  }

  &:hover img,
  &:focus img {
    filter: brightness(0) invert(1) drop-shadow(0 0 2px #fff);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    background: #f5f6fa;
    color: #61b6e6;
    border-color: #61b6e6;
  }

  &:disabled img {
    filter: grayscale(1) opacity(0.5);
  }

  img {
    width: 28px;
    height: 28px;
    transition: filter 0.2s;
    filter: none;
    display: block;
    margin: 0 auto;
    pointer-events: none;
  }
`;

function TeacherCard({ photo, avatar, name, siteUrl, facebookUrl }) {
  return (
    <Card>
      <Photo src={photo} alt={name} />
      <Overlay className="overlay">
        <Avatar src={avatar || photo} alt={name} />
        <div>
          <Name>{name}</Name>
          <Buttons>
            {siteUrl && (
              <LinkButton
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Link.svg" alt="Сайт" />
                <span>Сайт</span>
              </LinkButton>
            )}
            {facebookUrl && (
              <LinkButton
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Facebook.svg" alt="Facebook" />
                <span>Facebook</span>
              </LinkButton>
            )}
          </Buttons>
        </div>
      </Overlay>
    </Card>
  );
}

const teachers = [
  {
    photo: "/man.png",
    name: "Новосельцев Святослав Валерьевич",
    siteUrl: "https://site.com",
    facebookUrl: "https://facebook.com",
  },
  {
    photo: "/man.png",
    name: "Иванов Иван Иванович",
    siteUrl: "https://site.com",
    facebookUrl: "https://facebook.com",
  },
  {
    photo: "/man.png",
    name: "Петров Петр Петрович",
    siteUrl: "https://site.com",
    facebookUrl: "https://facebook.com",
  },
  {
    photo: "/man.png",
    name: "Сидоров Сидор Сидорович",
    siteUrl: "https://site.com",
    facebookUrl: "https://facebook.com",
  },
];

export default function TeacherCardList() {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (startX.current === null) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && index < teachers.length - 1) {
        setIndex(index + 1);
        startX.current = null;
      } else if (diff > 0 && index > 0) {
        setIndex(index - 1);
        startX.current = null;
      }
    }
  };
  const handleTouchEnd = () => {
    startX.current = null;
  };

  // Mobile carousel controls
  const handlePrev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const handleNext = () =>
    setIndex((i) => (i < teachers.length - 1 ? i + 1 : i));

  return (
    <section id="teachers" data-aos="fade-down">
      <Title>Наши предподаватели</Title>
      {/* Desktop */}
      <Container>
        <div style={{ display: "contents" }}>
          {teachers.map((teacher, idx) => (
            <TeacherCard key={idx} {...teacher} />
          ))}
        </div>
      </Container>
      {/* Mobile Carousel */}
      <CarouselWrapper>
        <CarouselInner
          index={index}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {teachers.map((teacher, idx) => (
            <CarouselCard key={idx}>
              <TeacherCard {...teacher} />
            </CarouselCard>
          ))}
        </CarouselInner>
        <CarouselNav>
          <NavBtn onClick={handlePrev} disabled={index === 0} aria-label="Prev">
            <img src="/left.svg" alt="prev" />
          </NavBtn>
          <NavBtn
            onClick={handleNext}
            disabled={index === teachers.length - 1}
            aria-label="Next"
          >
            <img src="/right.svg" alt="next" />
          </NavBtn>
        </CarouselNav>
        {/* Pagination dots removed */}
      </CarouselWrapper>
    </section>
  );
}
