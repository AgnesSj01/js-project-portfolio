// src/components/ProjectsCard.jsx
import styled from "styled-components";
import { LinkButton } from "./LinkButton";
import webIcon from "../assets/icons/web.svg";
import githubIcon from "../assets/icons/github.svg";
import { Tag } from "./tag";

/* Wrapper for the entire project card.
   Mobile/Tablet = column layout.
   Desktop = row or reversed row depending on "reverse" prop. */
const ProjectCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
  padding: 30px 30px;
  max-width: 1200px;
  margin: 16px auto;
  border-radius: 12px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  @media (min-width: 1024px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    gap: 20px;
    padding: 60px 80px;
  }
`;

/* Column containing the project image */
const ImageCol = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
`;

/* Project preview image */
const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  height: auto;
  object-fit: contain;
  display: block;
  transition: transform 0.4s ease;

  ${ImageCol}:hover & {
    transform: scale(1.03);
  }
`;

/* Column containing title, tags, text and buttons */
const ContentCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;

  @media (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
    gap: 10px;
  }
`;

/* Row displaying all tech tags */
const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-bottom: 8px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    gap: 8px;
  }
`;

/* Project description text */
const Description = styled.p`
  margin: 0;
  max-width: 100%;
  line-height: 1.5;
  color: #444;
`;

/* Wrapper for the action buttons (live demo / code) */
const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;

  @media (min-width: 1024px) {
    margin-top: 24px;
  }
`;

/* Icon inside each link button */
const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const ButtonLabel = styled.span``;

/* Main component for rendering a single project card */
export default function ProjectsCard({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  liveUrl,
  codeUrl,
  reverse,
}) {
  return (
    <ProjectCardWrapper reverse={reverse}>
      <ImageCol>
        <ProjectImage src={imageSrc} alt={imageAlt} />
      </ImageCol>

      <ContentCol>
        <TagsRow>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsRow>

        <h3>{title}</h3>
        <Description>{description}</Description>

        <ButtonsWrapper>
          {liveUrl && (
            <LinkButton href={liveUrl} target="_blank" rel="noreferrer">
              <IconImage src={webIcon} alt="Web icon" />
              <ButtonLabel>Live demo</ButtonLabel>
            </LinkButton>
          )}
          {codeUrl && (
            <LinkButton href={codeUrl} target="_blank" rel="noreferrer">
              <IconImage src={githubIcon} alt="GitHub icon" />
              <ButtonLabel>View Code</ButtonLabel>
            </LinkButton>
          )}
        </ButtonsWrapper>
      </ContentCol>
    </ProjectCardWrapper>
  );
}
