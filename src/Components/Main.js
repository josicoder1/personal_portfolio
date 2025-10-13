import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponents'
import SocialIcons from '../subComponents/SocialIcons'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`

const WORK = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`

// 🔄 Constant rotation animation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

// 🎯 Always bottom-right and rotating
const Center = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  svg {
    animation: ${rotate} infinite 3s linear;
  }

  span {
    color: ${props => props.theme.text};
    font-size: 0.9rem;
    padding-top: 0.5rem;
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background: #000;
  bottom: 0;
  right: 50%;
  width: ${props => (props.click ? '50%' : '0%')};
  height: ${props => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {
  // 👇 Always true so the Intro (image + text) shows automatically
  const [click] = useState(true);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        {/* Always visible YinYang in bottom-right corner */}
        <Center click={click}>
          <YinYang width={100} height={100} fill="currentColor" />
          <span>Welcome</span>
        </Center>

        <Contact href="mailto:jsptadesse@gmail.com" target="_blank" rel="noopener noreferrer">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h2>
        </Contact>

        <BLOG to="/blog">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Contact
          </motion.h2>
        </BLOG>

        <WORK to="/work" click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>

      {/* 🧩 Intro always visible now */}
      <Intro click={click} />
    </MainContainer>
  )
}

export default Main
