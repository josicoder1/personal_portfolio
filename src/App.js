import React from "react";
import GlobalStyle from "./globalStyle";
import { lightTheme } from "./Components/Themes";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import AboutPage from "./Components/AboutPage";
import BlogPage from "./Components/ContactUs";
import MySkillsPage from "./Components/MySkillsPage";
import WorkPage from "./Components/WorkPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />

          </Routes>
       
      </ThemeProvider>
    </>
  );
}

export default App;