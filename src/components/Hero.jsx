import styled from "styled-components";
import agnesImg from "../assets/Agnes.jpg";
import CoffeeImg from "../assets/Coffee.jpg";
import sunflowerImg from "../assets/sunflower.jpg";

/* 
  Main wrapper for the hero section.
  Uses flex layout so child elements can be reordered on mobile.
*/
const HeroSection = styled.section`
  padding: 40px 16px;
  text-align: center;
  background-color: #ffffff;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Intro heading shown above the name */
const IntroTitle = styled.h3`
  margin: 0 0 8px;
  line-height: 1.2;

  @media (max-width: 767px) {
    order: 1;
  }
`;

/* Main name/title element */
const Name = styled.h1`
  margin: 8px 0 16px;
  font-weight: 800;
  text-align: center;
  line-height: 1.1;

  @media (max-width: 767px) {
    order: 2;
  }
`;

/* Subtitle/tagline describing the person */
const Tagline = styled.h3`
  max-width: 750px;
  margin: 0 auto 16px;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 767px) {
    order: 3;
  }
`;

/* Main descriptive paragraph */
const Text = styled.p`
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    text-align: center;
    padding-left: 70px;
    padding-right: 70px;
  }

  /* Mobile: shown after the images */
  @media (max-width: 767px) {
    order: 5;
  }
`;

/* Wrapper holding the three overlapping hero images */
const HeroImages = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
  height: 350px;
  margin: 0 auto 70px;

  @media (max-width: 767px) {
    max-width: 320px;
    height: 200px;
    margin-bottom: 40px;
    order: 4;
  }
`;

/* Base style for all side images */
const SideImage = styled.img`
  position: absolute;
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;

  @media (max-width: 767px) {
    width: 150px;
    height: 180px;
  }
`;

/* Left image with rotation effect */
const LeftImage = styled(SideImage)`
  left: 0;
  top: 50px;
  transform: rotate(-8deg);

  @media (max-width: 767px) {
    top: 20px;
  }
`;

/* Right image with rotation effect */
const RightImage = styled(SideImage)`
  right: 0;
  top: 50px;
  transform: rotate(8deg);

  @media (max-width: 767px) {
    top: 20px;
  }
`;

/* Wrapper for the centered main portrait image */
const CenterImageWrapper = styled.div`
  position: absolute;
  left: 65%;
  top: 10px;
  transform: translateX(-85%);
  width: 300px;
  height: 350px;
  border-radius: 24px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 170px;
    height: 200px;
    top: 0;
  }
`;

/* Portrait image inside the center frame */
const CenterImage = styled.img`
  width: 290px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 767px) {
    width: 160px;
    height: 160px;
  }
`;

// Hero component displaying the intro text, portrait images, and a brief description.
export default function Hero() {
  return (
    <HeroSection>
      <IntroTitle>Hi there, I´m</IntroTitle>
      <Name>Agnes Sjösten</Name>

      <HeroImages>
        <LeftImage src={CoffeeImg} alt="Coffee" />
        <RightImage src={sunflowerImg} alt="Sunflower" />
        <CenterImageWrapper>
          <CenterImage src={agnesImg} alt="Agnes Sjösten" />
        </CenterImageWrapper>
      </HeroImages>

      <Tagline>
        Agnes is a creative developer with a background in social work.
      </Tagline>

      <Text>
        After exploring the world and working with people, she became a social
        worker driven by empathy and a desire to make a difference. Today, she
        combines that understanding with her passion for design and technology
        to create meaningful, user-centered digital solutions.
      </Text>
    </HeroSection>
  );
}
