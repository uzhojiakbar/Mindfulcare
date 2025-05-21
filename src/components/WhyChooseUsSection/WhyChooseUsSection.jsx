"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { useState } from "react";

const Section = styled.section`
  padding: 80px 20px;
  background: #f9fbfc;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Manrope";
  font-weight: 700;
  margin-bottom: 40px;
`;

const StyledSlide = styled.div`
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: ${({ position }) =>
    position === "center"
      ? "scale(1.06)"
      : position === "left" || position === "right"
      ? "scale(0.94)"
      : "scale(0.8)"};

  opacity: ${({ position }) =>
    position === "center"
      ? 1
      : position === "left" || position === "right"
      ? 0.6
      : 0};

  background: ${({ position }) =>
    position === "center"
      ? "linear-gradient(to bottom right, #75c1e5, #539cd0)"
      : "#fff"};

  border: ${({ position }) =>
    position === "center" ? "none" : "1px solid #d7eaf7"};

  color: ${({ position }) => (position === "center" ? "#fff" : "#333")};
  border-radius: 20px;
  padding: 40px 20px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ position }) =>
    position === "center" ? "0 15px 40px rgba(0, 0, 0, 0.2)" : "none"};

  pointer-events: none;

  img {
    width: 60px;
    & path {
      fill: red;
    }
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-family: "Poppins";
    max-width: 260px;
    text-align: center;
    line-height: 1.5;
  }
`;

const slides = [
  {
    title: "Профессионализм",
    text: "Программа дается исключительно онлайн с практикой от лучших специалистов.",
    icon: "/icon1.svg",
  },
  {
    title: "Комплексный подход",
    text: "Теория, практика и исследование — в каждой программе.",
    icon: "/icon2.svg",
  },
  {
    title: "Экспертная команда",
    text: "Доктора наук, остеопаты и практикующие специалисты.",
    icon: "/icon3.svg",
  },
];

export default function WhyChooseUsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  function getSlidePosition(index, activeIndex, total) {
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;

    if (index === activeIndex) return "center";
    if (index === prev) return "left";
    if (index === next) return "right";

    return "hidden";
  }

  return (
    <Section id="why" data-aos="fade-down">
      <Title>Почему выбирают нас?</Title>

      <Swiper
        modules={[Navigation]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -60,
          },
        }}
      >
        {slides.map((slide, index) => {
          const position = getSlidePosition(index, activeIndex, slides.length);

          return (
            <SwiperSlide key={index}>
              <StyledSlide position={position}>
                <img src={slide.icon} alt={slide.title} />
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </StyledSlide>
            </SwiperSlide>
          );
        })}

        <div className="swiper-button-prev" style={{ color: "#539cd0" }}></div>
        <div className="swiper-button-next" style={{ color: "#539cd0" }}></div>
      </Swiper>
    </Section>
  );
}
