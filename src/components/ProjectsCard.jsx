// src/components/ProjectsCard.jsx
import styled from "styled-components";
import { LinkButton } from "./LinkButton";
import webIcon from "../assets/icons/web.svg";
import githubIcon from "../assets/icons/github.svg";
import { Tag } from "./tag";

const ProjectCardWrapper = styled.article`
  display: flex;
  flex-direction: column; /* DEFAULT: mobil + tablet = kolumn */
  gap: 60px;
  background-color: #ffffff;
  color: #000000;
  padding: 20px 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    /* DESKTOP: rad igen */
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    gap: 100px;
    padding: 50px 80px;
  }
`;

const ImageCol = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start; /* bilden fastnar i toppen */
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px; /* begränsar höjden så de inte blir ENORMT stora */
  height: auto; /* låter bilden behålla sin proportion */
  object-fit: contain; /* beskär inget, visar hela Figma-bilden */
  display: block;
`;
const ContentCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #000;
`;

const Description = styled.p`
  margin: 0;
  max-width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: #000;
`;

const ButtonsWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const ButtonLabel = styled.span``;

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

        <Title>{title}</Title>
        <Description>{description}</Description>

        <ButtonsWrapper>
          {codeUrl && (
            <LinkButton href={codeUrl} target="_blank" rel="noreferrer">
              <IconImage src={githubIcon} alt="GitHub icon" />
              <ButtonLabel>View Code</ButtonLabel>
            </LinkButton>
          )}

          {liveUrl && (
            <LinkButton href={liveUrl} target="_blank" rel="noreferrer">
              <IconImage src={webIcon} alt="Web icon" />
              <ButtonLabel>Live demo</ButtonLabel>
            </LinkButton>
          )}
        </ButtonsWrapper>
      </ContentCol>
    </ProjectCardWrapper>
  );
}
