import agnes2Img from "../assets/Agnes2.jpg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import styled from "styled-components";

const Talktitle = styled.h2`
  margin: 0 0 10px;
  padding-top: 60px;
`;

const AgnesImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #333;
`;

const Contact = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
  background-color: #111;
  color: white;
  padding: 60px 20px 80px;
  width: 100%;
`;

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const IconImage = styled.img`
  width: 32px;
  height: 32px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
  justify-content: center;
`;

export default function LetsTalk() {
  return (
    <Contact id="contact">
      <Talktitle>Let's Talk</Talktitle>

      <AgnesImage src={agnes2Img} alt="Agnes Sjösten" />
      <ContactList>
        <Li style={{ fontWeight: 700, fontSize: "inherit" }}>Agnes Sjösten</Li>
        <Li>
          <a href="tel:+46705955548">+46 (0)70 5 95 55 48</a>
        </Li>
        <Li>
          <a href="mailto:agnes_sjosten@hotmail.com">
            agnes_sjosten@hotmail.com
          </a>
        </Li>
      </ContactList>
      <IconRow>
        <a
          href="https://www.linkedin.com/in/agnes-cecilia-sj%C3%B6sten/"
          aria-label="Visit LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/AgnesSj01"
          aria-label="Visit GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={githubIcon} alt="GitHub" />
        </a>
      </IconRow>
    </Contact>
  );
}
