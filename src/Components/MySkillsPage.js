import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponents from '../subComponents/LogoComponents';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1; /* Ensure Main is above ParticleComponent */

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > :first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponents theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            I can develop full-stack applications and keep them clean,
            minimal, and simple.
          </Description>
          <Description>
            <strong>I like to develop</strong>
            <ul>
              <li>Backend web apps using PHP</li>
              <li>Backend web apps using Node.js</li>
              <li>with Next</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VSCode, GitHub, CodePen, etc.</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Design width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value the business or brand I’m building for and enjoy bringing
            new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, JS, React, Bootstrap, Tailwind, PHP, Node,Next, etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VSCode, GitHub, CodePen, etc.</li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;