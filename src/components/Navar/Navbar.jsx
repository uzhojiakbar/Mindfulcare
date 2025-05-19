"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Nav = styled.nav`
  padding: 20px 40px;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--background);

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

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

const MenuLinks = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  align-items: center;

  a {
    position: relative;
    font-family: "Manrope", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #111;
    cursor: pointer;
    text-decoration: none !important;
    padding: 4px 0;
    transition: color 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
  .active {
    border-bottom: 2px solid #539cd0;
    font-weight: 600;
    color: #539cd0;
  }
  @media (max-width: 1440px) {
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  padding: 15px 30px;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  background: var(--button-background);
  z-index: 0;

  font-weight: 700;
  font-family: "Manrope";
  font-size: 18px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--button-background-hover);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButtonMobile = styled.button`
  position: relative;
  overflow: hidden;
  border: none;
  padding: 15px 30px;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  background: var(--button-background);
  z-index: 0;

  font-weight: 700;
  font-family: "Manrope";
  font-size: 18px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--button-background-hover);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Burger = styled.div`
  display: none;
  border: 1px solid #75c1e5;
  border-radius: 10px;
  padding: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 90vh;
  background-color: var(--background);
  z-index: 9999;
  padding: 20px 10px;

  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: "Manrope";
    font-size: 18px;
    overflow: auto;
    height: 80%;

    li {
      width: 100%;
      padding: 20px 14px;
      text-align: center;
      a {
        text-decoration: none;
        text-align: center;
        color: #1a1a1a;
      }
    }

    .active {
      background-color: #dff5ff;
      a {
        color: #75c1e5;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    "home",
    "about",
    "why",
    "program",
    "teachers",
    "reviews",
    "faq",
  ];
  const sectionNames = {
    home: "О нас",
    about: "Почему мы?",
    why: "Программа",
    program: "Учителя",
    teachers: "Отзывы",
    reviews: "FAQ",
    faq: "Контакты",
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.3 &&
            rect.bottom >= window.innerHeight * 0.3
          ) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav>
      <Logo>
        <img src="/logo.svg" alt="logo" />
        <span>
          Национальный <br />
          учебно-научный центр остеопатии <br /> имени С.В.Новосельцева
        </span>
      </Logo>
      <MenuLinks>
        {sections.map((id, index) => (
          <li key={index}>
            <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
              {sectionNames[id]}
            </a>
          </li>
        ))}
      </MenuLinks>

      <MenuButton>Оставить заявку</MenuButton>

      {isOpen ? (
        <Burger className="close" onClick={() => setIsOpen(false)}>
          <img src="/Close.svg" alt="menu" />
        </Burger>
      ) : (
        <Burger onClick={() => setIsOpen(true)}>
          <img src="/HamburgerMenu.svg" alt="menu" />
        </Burger>
      )}

      <AnimatePresence>
        {isOpen && (
          <MobileMenuWrapper
            initial={{ x: "40%" }}
            animate={{ x: 0 }}
            exit={{ x: "40%" }}
            transition={{ duration: 0.1 }}
          >
            <ul>
              {sections.map((id, index) => (
                <li
                  className={activeSection === id ? "active" : ""}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`#${id}`}>{sectionNames[id]}</a>
                </li>
              ))}
            </ul>
            <MenuButtonMobile>Оставить заявку</MenuButtonMobile>
          </MobileMenuWrapper>
        )}
      </AnimatePresence>
    </Nav>
  );
}
