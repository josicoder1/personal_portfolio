import React, { useState, useEffect } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponents from '../subComponents/LogoComponents';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

// ------------------- Keyframes -------------------
const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(-10px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;
// -------------------------------------------------

// ------------------- Styled Components -------------------
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled.h2`
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.75)`};
  font-family: 'Jura', sans-serif;
  font-size: calc(1rem + 1vw);
  text-align: center;
  margin: 2rem 0 3rem; /* Adjusted margin-top from 3rem to 2rem */
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  animation: ${fadeIn} 1s ease-out 0.4s both;
`;

const WorkItem = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 400% 400%;
    animation: ${float} 2s ease-in-out infinite;
  }
`;

const ProjectName = styled.h3`
  color: ${(props) => props.theme.text};
  font-family: 'Jura', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
// -------------------------------------------------

const WorkPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch top 4 repositories from josicode1 GitHub profile, sorted by updated date
    fetch('https://api.github.com/users/josicode1/repos?sort=updated&per_page=4&direction=desc')
      .then(res => res.json())
      .then(data => {
        const formattedProjects = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description available.',
          tags: repo.topics.length > 0 ? repo.topics : [repo.language || 'Unknown'],
          github: repo.html_url,
          live: repo.homepage || null,
          stars: repo.stargazers_count,
          language: repo.language || 'Unknown'
        }));
        setProjects(formattedProjects);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
        // Fallback to sample data if API fails
        setProjects([
          {
            id: 1,
            name: "Sample Project 1",
            description: "A sample project showcasing development skills.",
            tags: ["JavaScript", "React"],
            github: "https://github.com/josicode1/sample1",
            live: null,
            stars: 10,
            language: "JavaScript"
          },
          {
            id: 2,
            name: "Sample Project 2",
            description: "Another example of modern web development.",
            tags: ["Python", "Django"],
            github: "https://github.com/josicode1/sample2",
            live: "https://sample2.josicode1.com",
            stars: 15,
            language: "Python"
          },
          {
            id: 3,
            name: "Sample Project 3",
            description: "Mobile app prototype with React Native.",
            tags: ["React Native", "Expo"],
            github: "https://github.com/josicode1/sample3",
            live: null,
            stars: 8,
            language: "JavaScript"
          },
          {
            id: 4,
            name: "Sample Project 4",
            description: "Data visualization dashboard.",
            tags: ["D3.js", "Vue.js"],
            github: "https://github.com/josicode1/sample4",
            live: "https://sample4.josicode1.com",
            stars: 12,
            language: "JavaScript"
          }
        ]);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponents theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Subtitle>Explore my latest work from GitHub (josicode1)</Subtitle>

        <WorkContainer>
          {projects.map((project) => (
            <WorkItem key={project.id}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.tags.map((tag, index) => (
                  <TechTag key={index}>{tag}</TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </LinkButton>
                {project.live && (
                  <LinkButton href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </LinkButton>
                )}
              </ProjectLinks>

              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                ⭐ {project.stars} stars | {project.language}
              </div>
            </WorkItem>
          ))}
        </WorkContainer>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;