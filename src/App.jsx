import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import SkillsData from "./components/SkillsData";
import MyTexts from "./components/MyTexts";
import LetsTalk from "./components/LetsTalk";
import { GlobalStyle } from "./components/GlobalStyle";

import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh; /* sidan minst lika hög som skärmen */
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1; /* innehållet tar allt utrymme ovanför footern */
`;

export const App = () => {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Content>
        <Hero />
        <Tech />
        <Projects />
        <SkillsData />
        <MyTexts />
        <LetsTalk />
      </Content>
    </PageWrapper>
  );
};
