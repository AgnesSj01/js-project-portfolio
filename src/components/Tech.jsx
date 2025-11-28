import styled from "styled-components";

/* Section displaying a short list of technical skills */
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

/* Heading for the tech section */
const TechTitle = styled.h2`
  color: white;
  margin: 10px 0px 20px;
`;

/* Paragraph containing the list of technologies */
const Description = styled.p`
  color: white;
  padding-bottom: 20px;
`;

/* Component rendering the Tech section */
export default function Tech() {
  return (
    <TechSection>
      <TechTitle>Tech</TechTitle>
      <Description>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
        Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming,
        GitHub.
      </Description>
    </TechSection>
  );
}
