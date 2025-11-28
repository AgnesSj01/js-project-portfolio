import styled from "styled-components";
import webIcon from "../assets/icons/web.svg";
import { LinkButton } from "./LinkButton";

const MyWordWrapper = styled.article`
  display: flex;
  flex-direction: column; /* DEFAULT: mobil + tablet = kolumn */
  gap: 60px;
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
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
  }
`;

const ImageWord = styled.div`
  flex: 1;

  /* MOBIL: centrera bilden */
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    /* TABLET + DESKTOP: vänsterställ igen */
    justify-content: flex-start;
  }
`;

const ProjectImage = styled.img`
  width: 80%;
  height: 300px; /* ← lägg till denna! justera efter din design */
  object-fit: cover; /* ← snygg beskärning */
  border-radius: 12px;
  display: block;
`;
const ContentCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0px;
  text-align: left;
`;

const SkillTag = styled.span`
  padding: 8px 12px; /* mindre padding */
  border-radius: 6px;
  border: 1.5px solid black; /* tunnare border */
  font-size: 18px; /* mindre text */
  font-weight: 520;
  width: 200px; /* så att den krymper efter innehåll */
  margin-bottom: 12px;
  text-align: center;
  color: black;
`;
const ButtonsWrapper = styled.div`
  margin-top: 24px;
  align-items: flex-start; /* så de hamnar vänsterställda */
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const ButtonLabel = styled.span`
  /* extra span för texten om du vill styra typografin senare */
`;

const Title = styled.h3`
  margin: 0 0 8px 0; /* ⬅️ tar bort auto-center */
  font-size: 24px;
  font-weight: 700;
  color: #000; /* 👈 tvingar rubriken att bli svart */
`;

export default function MyWords({
  //Listar propsen
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
        <SkillTag className="tag">{tags}</SkillTag>
        <Title>{title}</Title>
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
