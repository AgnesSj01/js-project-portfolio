import styled from "styled-components";

const TechSection = styled.section`
  padding: 20px;
  text-align: center;
  background-color: black;
  p {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    letter-spacing: 0.4px;
    line-height: 1.6;
  }
  @media (min-width: 768px) {
    padding: 90px;
  }
`;

const TechTitle = styled.h2`
  color: white;
  margin: 10px 0px 20px;
`;

const Description = styled.p`
  color: white;
  padding-bottom: 20px;
`;

export default function Tech() {
  return (
    <TechSection>
      <TechTitle>Tech</TechTitle>
      <Description>
        Figma, HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks,
        Node.js, Mongo DB, Web Accessibility, APIs, mob-programming,
        pair-programming, GitHub.
      </Description>
    </TechSection>
  );
}
