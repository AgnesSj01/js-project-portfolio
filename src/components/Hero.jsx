import styled from "styled-components";
import agnesImg from "../assets/Agnes.jpg";
import CoffeeImg from "../assets/Coffee.jpg";
import sunflowerImg from "../assets/sunflower.jpg";

const HeroSection = styled.section`
  padding: 40px 16px;
  text-align: center;
  background-color: #ffffff;
  color: black;

  p {
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    max-width: 750px;
    margin: auto;
  }
`;

const Name = styled.h1`
  margin: 8px 0 8px;

  font-weight: 800;
  text-align: center;
`;

// Container som håller alla tre bilderna
const HeroImages = styled.div`
  position: relative;
  width: 100%; /* ta aldrig mer än viewportens bredd */
  max-width: 650px; /* desktop max */
  height: 350px;
  margin: 0 auto 70px;

  @media (max-width: 767px) {
    max-width: 320px; /* mobil max-bredd */
    height: 200px;
    margin-bottom: 40px;
  }
`;

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

const LeftImage = styled(SideImage)`
  left: 0;
  top: 50px;
  transform: rotate(-8deg);

  @media (max-width: 767px) {
    top: 20px;
  }
`;

const RightImage = styled(SideImage)`
  right: 0;
  top: 50px;
  transform: rotate(8deg);

  @media (max-width: 767px) {
    top: 20px;
  }
`;

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

export default function Hero() {
  return (
    <HeroSection>
      <h3>Hi there, I´m</h3>
      <Name>Agnes Sjösten</Name>

      <HeroImages>
        <LeftImage src={CoffeeImg} alt="Coffee" />
        <RightImage src={sunflowerImg} alt="Sunflower" />
        <CenterImageWrapper>
          <CenterImage src={agnesImg} alt="Agnes Sjösten" />
        </CenterImageWrapper>
      </HeroImages>

      <h3>Agnes is a creative developer with a background in social work.</h3>

      <p>
        After exploring the world and working with people, she became a social
        worker driven by empathy and a desire to make a difference. Today, she
        combines that understanding with her passion for design and technology
        to create meaningful, user-centered digital solutions.
      </p>
    </HeroSection>
  );
}
