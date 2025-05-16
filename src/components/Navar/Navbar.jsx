"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const sections = ["home", "about", "services", "page"];

const NavbarWrapper = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #fdf9f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
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
`;
const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  color: #111;
  cursor: pointer;
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 2px;
  background: #111;
  border-radius: 999px;
`;

const Button = styled.button`
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

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });

  const handleScroll = () => {
    let currentSection = "home";
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = id;
          break;
        }
      }
    }
    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = document.querySelector(`[data-nav="${activeLink}"]`);
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setIndicatorProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeLink]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarWrapper data-aos="fade-up" data-aos-duration="500">
      <Logo>
        <img src="/logo.svg" alt="logo" />
        <span>
          Национальный <br />
          учебно-научный центр остеопатии <br /> имени С.В.Новосельцева
        </span>
      </Logo>

      <NavWrapper>
        {sections.map((id) => (
          <NavItem
            key={id}
            data-nav={id}
            onClick={() => scrollToSection(id)}
            isActive={activeLink === id}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </NavItem>
        ))}

        <Underline
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            left: indicatorProps.left,
            width: indicatorProps.width,
          }}
        />
      </NavWrapper>
      <Button>Contact Us</Button>
    </NavbarWrapper>
  );
};

export default Navbar;
