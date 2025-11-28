// Component that displays a single "My Words" article preview.
// Includes an image, date tag, title, short description, and a link button.

import styled from "styled-components";
import webIcon from "../assets/icons/web.svg";
import { LinkButton } from "./LinkButton";
import { Tag } from "./tag";

/* Wrapper for the entire article preview block */
const MyWordWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  color: #000000;
  padding: 20px 30px;
  max-width: 1200px;
  margin: 0 auto;
  p {
    color: black;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    padding-left: 150px;
    padding-right: 70px;
    padding-bottom: 70px;
    gap: 90px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    padding-left: 60px;
    padding-right: 30px;
    padding-bottom: 20px;
    gap: 20px;
  }
`;

/* Container for the article image */
const ImageWord = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

/* The article image itself */
const ProjectImage = styled.img`
  width: 90%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  display: block;

  @media (min-width: 768px) {
    width: 100%;
    height: 420px;
  }
  @media (min-width: 1024px) {
    max-height: 300px;
  }
`;

/* Column containing the text content and buttons */
const ContentCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;

  > span {
    margin-bottom: 20px;
  }

  > h3 {
    margin-bottom: 16px;
  }

  > p {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    padding-right: 80px;
    margin-bottom: 0px;

    > span {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1024px) {
    > span {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 35px;
    }
  }
`;

/* Wrapper for the link button */
const ButtonsWrapper = styled.div`
  margin-top: 15px;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

/* Icon used inside the link button */
const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

/* Label next to the icon in the button */
const ButtonLabel = styled.span``;

/* Main component rendering a single article preview */
export default function MyWords({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  articleUrl,
}) {
  return (
    <MyWordWrapper>
      <ImageWord>
        <ProjectImage src={imageSrc} alt={imageAlt} />
      </ImageWord>
      <ContentCol>
        <Tag>{tags}</Tag>

        <h3>{title}</h3>
        <p>{description}</p>

        {articleUrl && (
          <ButtonsWrapper>
            <LinkButton href={articleUrl} target="_blank" rel="noreferrer">
              <IconImage src={webIcon} alt="Web icon" />
              <ButtonLabel>Read article</ButtonLabel>
            </LinkButton>
          </ButtonsWrapper>
        )}
      </ContentCol>
    </MyWordWrapper>
  );
}
