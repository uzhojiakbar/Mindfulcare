"use client";

import { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

// --- SVG ICON COMPONENTS (inline, so we can control color) ---
const Icon1 = ({ active }) => (
  <svg
    width="200"
    height="201"
    viewBox="0 0 200 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M178.271 129.306H169.249C167.091 129.306 165.245 131.19 165.245 133.348V137.27C165.245 146.756 158.604 154.691 149.619 156.507V137.119H153.821C155.978 137.119 157.727 135.369 157.727 133.212C157.727 131.055 155.978 129.306 153.821 129.306H138C135.843 129.306 134.094 131.055 134.094 133.212C134.094 135.369 135.843 137.119 138 137.119H141.806V156.507C132.821 154.69 126.18 146.756 126.18 137.27V133.347C126.18 131.19 124.337 129.305 122.179 129.305H113.158C111.001 129.305 109.251 131.055 109.251 133.212C109.251 135.369 111.001 137.118 113.158 137.118H118.367V137.27C118.367 151.075 128.524 162.526 141.806 164.429V172.668H138C135.843 172.668 134.094 174.417 134.094 176.575C134.094 178.732 135.843 180.481 138 180.481H153.821C155.978 180.481 157.727 178.732 157.727 176.575C157.727 174.417 155.978 172.668 153.821 172.668H149.619V164.429C162.901 162.526 173.155 151.075 173.155 137.27L178.27 137.254C180.428 137.254 182.177 135.437 182.177 133.28C182.177 131.123 180.428 129.306 178.271 129.306Z"
      fill={`${active ? "white" : "rgba(83, 156, 208, 1)"}`}
    />
    <path
      d="M76.7321 79.5934C74.4308 81.8939 70.688 81.8939 68.3886 79.5934C66.8627 78.0682 64.3899 78.0682 62.8636 79.5934C61.3381 81.1188 61.3381 83.5925 62.8636 85.1183C68.2093 90.4644 76.9091 90.4656 82.2563 85.1183C83.7822 83.5928 83.7822 81.1196 82.2567 79.5937C80.7316 78.0686 78.2576 78.0682 76.7321 79.5934Z"
      fill={`${active ? "white" : "rgba(83, 156, 208, 1)"}`}
    />
    <path
      d="M58.831 66.6487C60.9885 66.6487 62.7375 64.8997 62.7375 62.7421C62.7375 60.5846 60.9885 58.8356 58.831 58.8356C56.6734 58.8356 54.9244 60.5846 54.9244 62.7421C54.9244 64.8997 56.6734 66.6487 58.831 66.6487Z"
      fill={`${active ? "white" : "rgba(83, 156, 208, 1)"}`}
    />
    <path
      d="M86.2899 66.6487C88.4474 66.6487 90.1965 64.8997 90.1965 62.7421C90.1965 60.5846 88.4474 58.8356 86.2899 58.8356C84.1324 58.8356 82.3834 60.5846 82.3834 62.7421C82.3834 64.8997 84.1324 66.6487 86.2899 66.6487Z"
      fill={`${active ? "white" : "rgba(83, 156, 208, 1)"}`}
    />
    <path
      d="M145.665 91.3934C138.523 91.3934 131.65 92.7817 125.399 95.2983V52.9372C125.399 23.4891 101.636 0 72.4874 0C43.2979 0 19.5326 23.7473 19.5326 52.9372V129.767C7.42238 138.323 0 152.183 0 167.277V196.107C0 198.264 1.76028 200.014 3.91746 200.014H145.715C175.661 200.014 200 175.65 200 145.704C200 115.757 175.612 91.3934 145.665 91.3934ZM72.5092 7.81303C97.302 7.81303 117.586 27.8437 117.586 52.9372V99.2017C108.991 104.541 101.672 112.508 97.0574 121.493H88.2869V106.334C100.788 100.405 109.773 87.4919 109.773 72.5495V47.0536C109.773 44.8964 108.041 43.1471 105.884 43.1471C96.8422 43.1471 88.1318 39.8594 81.3419 33.8898L75.1352 28.4297C73.6539 27.1276 71.4365 27.1335 69.963 28.4441L63.9899 33.6668C57.1758 39.7238 48.4037 42.9717 39.2871 42.9717H39.2195C37.0623 42.9717 35.1587 44.8964 35.1587 47.0536V72.5495C35.1587 87.4919 44.1436 100.405 57.0351 106.334V121.493H45.6914C39.3656 121.493 33.205 122.901 27.3452 125.398V52.9372C27.3456 28.0554 47.6279 7.81303 72.5092 7.81303ZM72.4655 101.984C56.2355 101.984 42.9717 88.7795 42.9717 72.5491V50.7964C52.738 49.9741 61.8198 46.0684 69.1043 39.5933L72.5362 36.5771L76.1552 39.757C83.3889 46.1168 92.5841 49.9612 101.96 50.7902V72.5487C101.96 88.7799 88.6959 101.984 72.4655 101.984ZM64.8482 108.96C67.1921 109.507 69.9649 109.797 72.6608 109.797C75.3571 109.797 77.7397 109.507 80.4743 108.96V124.09C76.5677 128.608 68.7547 128.613 64.8482 124.09V108.96ZM31.2521 192.201V176.495C31.2521 174.338 29.5028 172.588 27.3456 172.588C25.1884 172.588 23.4391 174.338 23.4391 176.495V192.201H7.81303V167.277C7.81303 145.812 25.3385 129.306 45.6918 129.306H58.8321C58.8802 129.306 58.9267 129.352 58.9743 129.351C66.3155 137.232 78.7671 137.259 86.1473 129.338C86.1949 129.339 86.2414 129.306 86.2895 129.306H93.9029C92.2809 134.385 91.4043 139.978 91.4043 145.652C91.4043 165.347 101.943 182.678 117.677 192.201H31.2521V192.201ZM145.714 192.201C120.076 192.201 99.2173 171.342 99.2173 145.704C99.2173 120.066 120.076 99.2068 145.714 99.2068C171.352 99.2068 192.211 120.066 192.211 145.704C192.211 171.342 171.353 192.201 145.714 192.201Z"
      fill={`${active ? "white" : "rgba(83, 156, 208, 1)"}`}
    />
  </svg>
);
const Icon2 = ({ active }) => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 130 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_230_713)">
      {/* Outline */}
      <rect
        x="0"
        y="0"
        width="130"
        height="130"
        rx="24"
        fill={active ? "url(#activeBg2)" : "#eaf6fb"}
      />
      {/* Main shapes */}
      <path
        d="M38.271 76.4784C33.2429 71.1027 24.5969 73.1684 22.2079 79.7967C21.2504 78.7442 18.7934 76.0366 18.7243 75.9672C18.1784 75.4213 17.8775 74.6952 17.8775 73.9228V43.3299C17.8775 38.4011 13.8676 34.3911 8.93877 34.3911C4.00994 34.3911 0 38.4011 0 43.3299V86.6699C0 89.3994 1.06311 91.9654 2.99279 93.8956C3.06719 93.97 2.00256 92.9909 19.0084 108.565C19.9568 109.532 20.4786 110.808 20.4786 112.164V127.461C20.4786 128.863 21.6155 130 23.0176 130H53.5275C54.9296 130 56.0666 128.863 56.0666 127.461V96.5052C56.0666 95.8611 55.8218 95.241 55.3818 94.7708L38.271 76.4784ZM50.9884 124.922H25.5567V112.164C25.5567 109.435 24.4941 106.869 22.5639 104.939C22.4791 104.854 23.0755 105.405 6.54824 90.2693C5.5999 89.3024 5.07812 88.0265 5.07812 86.6702V43.3299C5.07812 41.2011 6.81002 39.4692 8.93877 39.4692C11.0675 39.4692 12.7992 41.2011 12.7992 43.3299V73.9228C12.7992 76.0114 13.5987 77.9762 15.0503 79.4711C17.3926 82.0486 29.216 95.0592 31.5717 97.6516C32.5165 98.6908 34.1222 98.7647 35.1584 97.823C36.1961 96.88 36.273 95.2743 35.3298 94.2363L27.61 85.7411C26.1643 83.7995 26.4946 81.0207 28.4449 79.4836C30.3098 78.0132 32.9398 78.2123 34.5625 79.947L50.9884 97.5074V124.922Z"
        fill={active ? "#fff" : "rgba(83, 156, 208, 1)"}
      />
      <path
        d="M121.061 34.3911C116.132 34.3911 112.123 38.4011 112.123 43.3299V73.9228C112.123 74.6952 111.822 75.4211 111.276 75.9672C111.21 76.0328 108.443 79.0817 107.792 79.7967C105.404 73.1689 96.7576 71.1029 91.7293 76.4784L74.6183 94.7708C74.1782 95.241 73.9335 95.8611 73.9335 96.5052V127.461C73.9335 128.863 75.0705 130 76.4725 130H106.982C108.384 130 109.521 128.863 109.521 127.461V112.164C109.521 110.808 110.043 109.532 110.992 108.565C127.81 93.163 126.932 93.9707 127.007 93.8958C128.937 91.9656 130 89.3996 130 86.6702V43.3299C130 38.4011 125.99 34.3911 121.061 34.3911ZM124.922 86.6702C124.922 88.0265 124.4 89.3024 123.452 90.2693C106.852 105.471 107.517 104.858 107.436 104.939C105.506 106.869 104.443 109.435 104.443 112.164V124.922H79.0116V97.5076L95.4376 79.9472C97.06 78.2133 99.6895 78.0137 101.555 79.4838C103.503 81.0187 103.838 83.7967 102.39 85.7414L94.67 94.2366C93.7267 95.2745 93.8037 96.8802 94.8414 97.8232C95.8788 98.766 97.4848 98.6901 98.4281 97.6519C100.817 95.0227 112.622 82.0328 114.949 79.4714C116.401 77.9764 117.201 76.0114 117.201 73.923V43.3299C117.201 41.2011 118.933 39.4692 121.061 39.4692C123.19 39.4692 124.922 41.2014 124.922 43.3299V86.6702Z"
        fill={active ? "#fff" : "rgba(83, 156, 208, 1)"}
      />
      {/* Circle outline */}
      <ellipse
        cx="65"
        cy="36.3337"
        rx="36.3337"
        ry="36.3337"
        fill="none"
        stroke={active ? "#fff" : "#539cd0"}
        strokeWidth="5"
      />
      {/* Center circle */}
      <circle
        cx="65"
        cy="36.3337"
        r="18"
        fill={active ? "#fff" : "#eaf6fb"}
        stroke={active ? "#fff" : "#539cd0"}
        strokeWidth="4"
      />
    </g>
    <defs>
      <linearGradient
        id="activeBg2"
        x1="0"
        y1="0"
        x2="130"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#539CD0" />
        <stop offset="1" stopColor="#75C1E5" />
      </linearGradient>
      <clipPath id="clip0_230_713">
        <rect width="130" height="130" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Icon3 = ({ active }) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <ellipse
      cx="40"
      cy="40"
      rx="30"
      ry="20"
      stroke={active ? "#fff" : "#539cd0"}
      strokeWidth="4"
      fill={active ? "#fff2" : "#eaf6fb"}
    />
    <ellipse
      cx="40"
      cy="40"
      rx="10"
      ry="6"
      stroke={active ? "#fff" : "#539cd0"}
      strokeWidth="4"
    />
  </svg>
);

const slides = [
  {
    title: "Профессионализм",
    text: "Программа дается исключительно офлайн с практикой от лучших специалистов, что позволяет изучить курс максимально качественно.",
    icon: Icon1,
  },
  {
    title: "Комплексный подход",
    text: "Мы сочетаем теорию, практику и исследовательскую деятельность в рамках каждой программы.",
    icon: Icon2,
  },
  {
    title: "Экспертная команда",
    text: "Наш преподавательский состав включает докторов наук, врачей-остеопатов и практикующих специалистов.",
    icon: Icon3,
  },
];

const Section = styled.section`
  padding: 80px 0 100px 0;
  background: #f9fbfc;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: "Manrope";
  font-weight: 700;
  margin-bottom: 40px;
`;

const SlidesWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 520px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #f9fbfc;
  @media (max-width: 1023px) {
    min-height: 380px;
    height: 380px;
    max-width: 98vw;
  }
  @media (max-width: 767px) {
    min-height: 320px;
    height: 320px;
    max-width: 100vw;
  }
`;

const SlideStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  min-width: 260px;
  max-width: 500px;
  margin: 0;
  background: #fff;
  border-radius: 32px;
  padding: 56px 36px 56px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  color: #333;
  opacity: 0;
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%) scale(0.8);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $offset }) =>
    $offset === 0 &&
    css`
      width: 420px;
      height: 520px;
      background: linear-gradient(88.95deg, #539cd0 25.53%, #75c1e5 73.97%);
      color: #fff;
      opacity: 1;
      z-index: 2;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1.08);
      min-height: 420px;
      max-width: 95vw;
    `}
  ${({ $offset }) =>
    $offset === -1 &&
    css`
      opacity: 1;
      z-index: 1;
      pointer-events: auto;
      /* Chap va o'ng slaydlar borderlari active bilan yopishib turishi uchun margin yo'q, width bir xil */
      transform: translate(calc(-50% - 420px), -50%) scale(1);
      min-height: 420px;
      background: #fff;
      color: #222;
      box-shadow: none;
      border: 1px solid rgba(83, 156, 208, 1);
      );
    `}
  ${({ $offset }) =>
    $offset === 1 &&
    css`
      opacity: 1;
      z-index: 1;
      pointer-events: auto;
      transform: translate(calc(-50% + 420px), -50%) scale(1);
      min-height: 420px;
      background: #fff;
      color: #222;
      box-shadow: none;
      border: 1px solid rgba(83, 156, 208, 1);
    `}
  ${({ $offset }) =>
    Math.abs($offset) > 1 &&
    css`
      opacity: 0;
      pointer-events: none;
      z-index: 0;
      transform: translate(-50%, -50%) scale(0.8);
    `}

  img,
  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
    flex-shrink: 0;
    @media (max-width: 1023px) {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
    }
    @media (max-width: 767px) {
      width: 38px;
      height: 38px;
      margin-bottom: 8px;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 18px;
    font-family: "Manrope";
    @media (max-width: 1023px) {
      font-size: 20px;
      margin-bottom: 12px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  p {
    font-size: 18px;
    font-family: "Poppins";
    max-width: 340px;
    text-align: center;
    line-height: 1.6;
    margin: 0 auto;
    @media (max-width: 1023px) {
      font-size: 15px;
      max-width: 90vw;
    }
    @media (max-width: 767px) {
      font-size: 13px;
      max-width: 90vw;
    }
  }

  @media (max-width: 1023px) {
    width: 60vw;
    max-width: 95vw;
    padding: 32px 10px;
    min-height: 380px;
    height: 380px;
  }

  @media (max-width: 767px) {
    position: absolute;
    width: 90vw;
    max-width: 95vw;
    left: 50%;
    top: 50%;
    padding: 18px 4vw;
    min-height: 325px;
    height: 325px;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
    }
    img,
    svg {
      width: 80px;
      height: 80px;
      margin-bottom: 8px;
    }
    ${({ $offset }) =>
      $offset === 0 &&
      css`
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        pointer-events: auto;
        z-index: 2;
        height: 180px;
      `}
    ${({ $offset }) =>
      $offset === 1 &&
      css`
        opacity: 0.5;
        z-index: 1;
        pointer-events: none;
        transform: translate(calc(-50% + 44vw), -50%) scale(0.92);
        display: block;
        min-height: 325px;
        height: 325px;
      `}
    ${({ $offset }) =>
      $offset === -1 &&
      css`
        opacity: 0.5;
        z-index: 1;
        pointer-events: none;
        transform: translate(calc(-50% - 44vw), -50%) scale(0.92);
        display: block;
        height: 325px;
        height: 325px;
      `}
    ${({ $offset }) =>
      Math.abs($offset) > 1 &&
      css`
        display: none;
      `}
  }
`;

const ArrowsRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  @media (max-width: 767px) {
    margin-top: 18px;
    gap: 10px;
  }
`;

const ArrowButton = styled.button`
  background: #f9fbfc;
  border: 1.5px solid #b3d8f0;
  color: #539cd0;
  border-radius: 12px;
  padding: 15px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  box-shadow: 0 2px 8px rgba(117, 193, 229, 0.06);
  &:hover {
    background: #75c1e5;

    color: #fff;
    border: 1.5px solid #539cd0;
  }
  @media (max-width: 767px) {
    width: 45%;
    height: 36px;
    padding: 0;

    font-size: 18px;
  }
`;

function getOffset(index, activeIndex, total, direction) {
  // -1: left, 0: center, 1: right, else: hidden
  if (index === activeIndex) return 0;
  if (index === (activeIndex - 1 + total) % total) return -1;
  if (index === (activeIndex + 1) % total) return 1;
  return 99;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function WhyChooseUsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev
  const isMobile = useIsMobile();
  const touchStartX = useRef(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // --- Gesture handlers with drag feedback ---
  function handleTouchStart(e) {
    setIsDragging(true);
    setDragX(0);
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function handleTouchMove(e) {
    if (touchStartX.current === null) return;
    const moveX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragX(moveX - touchStartX.current);
  }
  function handleTouchEnd(e) {
    setIsDragging(false);
    if (touchStartX.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
    setDragX(0);
    touchStartX.current = null;
  }
  function handleMouseDown(e) {
    setIsDragging(true);
    setDragX(0);
    touchStartX.current = e.clientX;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }
  function handleMouseMove(e) {
    if (touchStartX.current === null) return;
    setDragX(e.clientX - touchStartX.current);
  }
  function handleMouseUp(e) {
    setIsDragging(false);
    handleTouchEnd(e);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // --- DRAG TRANSFORM CALC ---
  function getDragTransform(offset) {
    // Only center, left, right slides move with drag
    if (!isDragging) return undefined;
    if (offset === 0)
      return `translate(-50%, -50%) translateX(${dragX}px) scale(1.08)`;
    if (offset === -1)
      return `translate(calc(-50% - 260px + ${dragX}px), -50%) scale(0.93)`;
    if (offset === 1)
      return `translate(calc(-50% + 260px + ${dragX}px), -50%) scale(0.93)`;
    return undefined;
  }
  function getMobileDragTransform(offset) {
    if (!isDragging) return undefined;
    if (offset === 0)
      return `translate(-50%, -50%) translateX(${dragX}px) scale(1)`;
    if (offset === 1)
      return `translate(calc(-50% + 42vw + ${dragX}px), -50%) scale(0.85)`;
    if (offset === -1)
      return `translate(calc(-50% - 42vw + ${dragX}px), -50%) scale(0.85)`;
    return undefined;
  }

  return (
    <Section id="why" data-aos="fade-down">
      <Title>Почему выбирают нас?</Title>
      <SlidesWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        style={{ userSelect: "none" }}
      >
        {slides.map((slide, idx) => {
          const offset = isMobile
            ? idx === activeIndex
              ? 0
              : Math.abs(
                  (idx - activeIndex + slides.length) % slides.length
                ) === 1
              ? (idx - activeIndex + slides.length) % slides.length === 1
                ? 1
                : -1
              : 99
            : getOffset(idx, activeIndex, slides.length, direction);
          const Icon = slide.icon;
          // Drag transform
          const dragTransform = isMobile
            ? getMobileDragTransform(offset)
            : getDragTransform(offset);
          return (
            <SlideStyled
              key={idx}
              $offset={offset}
              $direction={direction}
              style={dragTransform ? { transform: dragTransform } : undefined}
            >
              <Icon active={offset === 0} />
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </SlideStyled>
          );
        })}
      </SlidesWrapper>
      <ArrowsRow>
        <ArrowButton onClick={handlePrev} aria-label="Previous">
          <svg width="24" height="24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>
        <ArrowButton onClick={handleNext} aria-label="Next">
          <svg width="24" height="24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowButton>
      </ArrowsRow>
    </Section>
  );
}
