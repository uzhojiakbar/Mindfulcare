import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

const HeroContainer = styled.section`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const HeroSection = styled.section`
  background: #fdf9f6;
  /* border: 1px solid red; */
  /* border: 1px solid green; */
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`

const Left = styled.div`
  padding: 80px 40px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`


const Right = styled.div`
  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 48px;
  width: 100%;
  line-height: 1.2;
  font-weight: 700;
  color: #111;
  font-family: 'Manrope';

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const Highlight = styled.span`
  color: #539cd0;
`

const Description = styled.p`
  font-size: 18px;
  width: 100%;
  color: rgba(26, 26, 26, 1);

  font-family: "Poppins", sans-serif;
  font-weight: 400;

`

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
  font-family: 'Manrope';
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
`

const Logos = styled.div`
  display: flex;
  width:  100%;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: wrap;

  .img{
    width: 100%;
    height: 100%;
  }
`

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, #75c1e5, #539cd0);
  color: white;
  padding: 40px 0;
  font-family: "Poppins", sans-serif;
  flex-wrap: wrap;
  gap: 20px;
  height: 190px;
`

const StatItem = styled.div`
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: 700;
    min-height: 45px;
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  p {
    font-size: 16px;
    margin-top: 5px;
  }
`

export const MainImage = styled(Image)`
    /* width: 800px !important; 
    height: 650px !important;  */
    width: 83% !important; 
    height: 83% !important; 
    position: relative;
    /* border: 1px solid red; */
`

const AnimatedNumber = ({ value }) => {
    return (
        <span>{value} +</span>
    )
}
export default function Hero() {
    const [counters, setCounters] = useState({ exp: 0, team: 0, clients: 0, done: 0 })

    useEffect(() => {
        const duration = 1000 // 1 second
        const fps = 30
        const steps = Math.floor(duration / (1000 / fps))

        const target = { exp: 8, team: 122, clients: 563, done: 232 }
        const increment = {
            exp: target.exp / steps,
            team: target.team / steps,
            clients: target.clients / steps,
            done: target.done / steps,
        }

        let current = { exp: 0, team: 0, clients: 0, done: 0 }
        let count = 0

        const interval = setInterval(() => {
            count++
            if (count >= steps) {
                clearInterval(interval)
                setCounters(target)
                return
            }
            current = {
                exp: Math.round(current.exp + increment.exp),
                team: Math.round(current.team + increment.team),
                clients: Math.round(current.clients + increment.clients),
                done: Math.round(current.done + increment.done),
            }
            setCounters(current)
        }, 1000 / fps)

        return () => clearInterval(interval)
    }, [])


    return (
        <HeroContainer id='home' className='page-container'>
            <HeroSection>
                <Left>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Title>
                            Healthy Minds, Happy Lives <Highlight>Mental Health </Highlight> Consultancy
                        </Title>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Description>
                            Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam.
                        </Description>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button>Get started</Button>
                    </motion.div>

                    <Logos>
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            >
                                <Image
                                    className='img'
                                    src={`/investor1.svg`}
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
                        <MainImage
                            src="/hero_anotom_man.svg"
                            alt="Muscle Illustration"
                            width={420}
                            height={420}
                        />
                    </motion.div>
                </Right>

            </HeroSection>

            <Stats>
                <StatItem>
                    <h2><AnimatedNumber value={counters.exp} /></h2>
                    <p>Experienced</p>
                </StatItem>
                <StatItem>
                    <h2><AnimatedNumber value={counters.team} /></h2>
                    <p>Teams</p>
                </StatItem>
                <StatItem>
                    <h2><AnimatedNumber value={counters.clients} /></h2>
                    <p>Clients</p>
                </StatItem>
                <StatItem>
                    <h2><AnimatedNumber value={counters.done} /></h2>
                    <p>Project Done</p>
                </StatItem>
            </Stats>
        </HeroContainer>
    )
}
