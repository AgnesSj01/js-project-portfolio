import agnes2Img from "../assets/Agnes2.jpg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import facebookIcon from "../assets/icons/Facebook.svg";
import styled from "styled-components";

/* Title at the top of the contact section */
const Talktitle = styled.h2`
  margin: 60px 0px 10px;
  padding-top: 30px;
`;

/* Circular portrait image */
const AgnesImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
`;

/* Main container for the contact section */
const Contact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  background-color: black;
  color: white;
  padding: 0 0 80px 0;
  width: 100%;
  margin-top: 80px;
`;

/* List of contact details */
const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0 10px 0;
  margin-top: 10px;
`;

/* Each contact line (name, phone, email) */
const Li = styled.li`
  font-size: 20px;
  font-weight: 550;
  line-height: 1.6;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 30px; /* tablet */
  }

  @media (min-width: 1024px) {
    font-size: 30px; /* desktop */
  }
`;

/* Social media icon images */
const IconImage = styled.img`
  width: 35px;
  height: 35px;
`;

/* Row displaying social media icons horizontally */
const IconRow = styled.div`
  display: flex;
  gap: 20px; /* avstånd mellan ikonerna */
  margin-top: 20px;
  justify-content: center;
`;

/* 
  Contact / Let's Talk section.
  Shows a title, portrait image, contact details,
  and a row of social media icons.
*/
export default function LetsTalk() {
  return (
    <Contact>
      <Talktitle>Let’s Talk</Talktitle>

      <AgnesImage src={agnes2Img} alt="Agnes Sjösten" />
      <ContactList>
        <Li>Agnes Sjösten</Li>
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
        <a
          href="https://www.facebook.com/agnes.sjosten"
          aria-label="Visit Facebook profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconImage src={facebookIcon} alt="Facebook" />
        </a>
      </IconRow>
    </Contact>
  );
}
