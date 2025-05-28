import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const HeroContainer = styled.section`
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const HeroSection = styled.section`
  background: var(--background);
  height: 75vh;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
    height: fit-content;
  }
`;

const Left = styled.div`
  padding: 80px 40px;
  max-width: 950px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (max-width: 1100px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    justify-content: space-evenly;
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
    height: fit-content;
  }
`;

const Right = styled.div`
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  color: #111;
  line-height: 110.00000000000001%;
  font-family: "Manrope", sans-serif;
  width: 100%;

  @media (max-width: 1100px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Highlight = styled.span`
  font-family: "Manrope", sans-serif;

  color: #539cd0;
`;

const Description = styled.p`
  font-size: 18px;
  width: 70%;
  color: rgba(26, 26, 26, 1);
  line-height: 110%;

  font-family: "Manrope", sans-serif;
  font-weight: 400;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Button = styled.a`
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: none;
  padding: 15px 30px;
  border-radius: 30px !important;
  font-weight: 500;
  cursor: pointer;
  background: var(--button-background, #007bff); // Fallback color
  z-index: 0;

  font-weight: 700;
  font-family: "Manrope";
  font-size: 18px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    border-radius: 30px !important;
    background: var(--button-background-hover, #0056b3); // Fallback hover color
  }

  &:hover::before {
    border-radius: 30px !important;
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Logos = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  flex-wrap: wrap;

  .img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    .img {
      width: 90%;
      height: 90%;
    }
  }
`;
const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(180px, auto)
  ); // Dynamically adjusts to fit content
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: var(--button-background);
  color: white;
  padding: 45px 0;
  font-family: "Manrope", sans-serif;
  gap: 50px 10px;
  height: fit-content;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  width: auto; // Adjusts width dynamically
  /* margin: 0 5px; */
  height: 100%;
  /* border: 1px solid red; */
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: "Manrope", sans-serif;
    text-align: left;
    .info-text-1 {
      font-size: 22px;
      font-weight: 700;
      line-height: 100%;
      font-family: "Manrope", sans-serif;
    }
    .info-text-2 {
      font-size: 28px;
      font-weight: 800;
      line-height: 100%;
      font-family: "Manrope", sans-serif;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    .info {
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    gap: 10px;
    .info {
      .info-text-1 {
        font-size: 14px;
      }
      .info-text-2 {
        font-size: 28px;
      }
    }
  }
`;

export const MainImage = styled(Image)`
  width: 50% !important;
  height: 83% !important;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-height: 768px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  width: 50% !important;
  height: 100% !important;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 1440px) {
    width: 30% !important;
    height: 70% !important;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

const AnimatedNumber = ({ value }) => {
  return <span>{value} +</span>;
};
export default function Hero() {
  const [counters, setCounters] = useState({
    exp: 0,
    team: 0,
    clients: 0,
    done: 0,
  });

  useEffect(() => {
    const duration = 1000; // 1 second
    const fps = 30;
    const steps = Math.floor(duration / (1000 / fps));

    const target = { exp: 8, team: 122, clients: 563, done: 232 };
    const increment = {
      exp: target.exp / steps,
      team: target.team / steps,
      clients: target.clients / steps,
      done: target.done / steps,
    };

    let current = { exp: 0, team: 0, clients: 0, done: 0 };
    let count = 0;

    const interval = setInterval(() => {
      count++;
      if (count >= steps) {
        clearInterval(interval);
        setCounters(target);
        return;
      }
      current = {
        exp: Math.round(current.exp + increment.exp),
        team: Math.round(current.team + increment.team),
        clients: Math.round(current.clients + increment.clients),
        done: Math.round(current.done + increment.done),
      };
      setCounters(current);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer data-aos="fade-down" id="home" className="page-container">
      <HeroSection>
        <Left>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: "100%" }}
          >
            <Title>
              Учебно-научный центр <br /> остеопатии
              <Highlight> им. С.В. Новосельцева</Highlight> Официальный набор на
              обучение
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Description>
              Пройдите обучение остеопатии с практикой на базе клиники Biolife и
              семинарами от Северо-Западной Академии. Получите диплом
              государственного образца всего за 6 месяцев.
            </Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="#contact">Оставить заявку</Button>
          </motion.div>

          <Logos>
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <Image
                  className="img"
                  src={`/inv${i}.svg`}
                  alt={`logo${i}`}
                  width={60}
                  height={30}
                />
              </motion.div>
            ))}
          </Logos>
        </Left>
        <Right>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <ImageWrapper>
              <Image
                src="/hero_anotom_man.svg"
                className="img"
                alt="Muscle Illustration"
                layout="fill"
                objectFit="contain" // yoki cover, depending on design
                priority
              />
            </ImageWrapper>
          </motion.div>
        </Right>
      </HeroSection>
      <Stats>
        <StatItem>
          <img src="/Clock.svg" alt="Clock" />
          <div className="info">
            <p className="info-text-1">Часов обучения</p>
            <p className="info-text-2">720</p>
          </div>
        </StatItem>
        <StatItem>
          <img src="/UserHandUp.svg" alt="Clock" />
          <div className="info">
            <p className="info-text-1">Академия</p>
            <p className="info-text-2">
              Северо-Западная <br /> остеопатии
            </p>
          </div>
        </StatItem>
        <StatItem>
          <img src="/Star.svg" alt="Clock" />
          <div className="info">
            <p className="info-text-1">Практика</p>
            <p className="info-text-2">
              в остеопатической <br /> клинике Biolife
            </p>
          </div>
        </StatItem>
        <StatItem>
          <img src="/RibbonsStar.svg" alt="Clock" />
          <div className="info">
            <p className="info-text-1">Официальные</p>
            <p className="info-text-2">
              Сертификат <br /> государственного образца
            </p>
          </div>
        </StatItem>
      </Stats>
    </HeroContainer>
  );
}
