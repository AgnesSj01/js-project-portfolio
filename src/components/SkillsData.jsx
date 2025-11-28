import styled from "styled-components";
import SkillCategory from "./SkillCategory";

const SkillsSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 60px 16px 80px;
`;

const SkillTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
`;

const CategoryRow = styled.div`
  display: flex;
  flex-direction: column; /* MOBIL + TABLET = EN KOLUMN */
  gap: 40px;
  width: 100%;

  /* MOBIL: vänster */
  align-items: flex-start;

  /* TABLET: centrera kolumnen */
  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }

  /* DESKTOP: RAD */
  @media (min-width: 1024px) {
    flex-direction: row; /* 👈 här tvingar vi RAD */
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export default function SkillsData() {
  return (
    <SkillsSection>
      <SkillTitle>Skills</SkillTitle>
      <CategoryRow>
        <SkillCategory
          label="Code"
          items={[
            "HTML5",
            "CSS3",
            "Javascript ES6",
            "React",
            "Styled Components",
            "GitHub",
          ]}
        />
        <SkillCategory
          label="Toolbox"
          items={[
            "Atom",
            "Postman",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Figma",
            "Keynote",
            "Slack",
          ]}
        />
        <SkillCategory label="Upcoming" items={["Node.js"]} />
        <SkillCategory
          label="More"
          items={[
            "Teamwork",
            "Communication",
            "Service design",
            "User-centered development",
          ]}
        />
      </CategoryRow>
    </SkillsSection>
  );
}
