import styled from "styled-components";
import SkillCategory from "./SkillCategory";

/* Wrapper for the entire skills section */
const SkillsSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 60px 16px 80px;
`;

/* Section heading */
const SkillTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
`;

/* Layout wrapper for all skill categories.
   Mobile/Tablet = single column
   Desktop = multi-column row with wrapping */
const CategoryRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

/* Component rendering all skill categories */
export default function SkillsData() {
  return (
    <SkillsSection id="skills">
      <SkillTitle>Skills</SkillTitle>
      <CategoryRow>
        <SkillCategory
          label="Code"
          items={[
            "HTML5",
            "CSS3",
            "Javascript ES6",
            "React",
            "React Router",
            "Node.js",
            "Express",
            "Styled Components",
            "GitHub",
          ]}
        />
        <SkillCategory
          label="Toolbox"
          items={[
            "VS Code",
            "Postman",
            "Figma",
            "Slack",
          ]}
        />
        <SkillCategory
          label="Data"
          items={["MongoDB", "REST APIs", "Zustand"]}
        />
        <SkillCategory
          label="More"
          items={[
            "Teamwork",
            "Communication",
            "Service design",
            "User-centered development",
            "Web Accessibility",
          ]}
        />
      </CategoryRow>
    </SkillsSection>
  );
}
