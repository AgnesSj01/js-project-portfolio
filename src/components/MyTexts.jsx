// Renders a section containing a list of article previews ("My Words").
// Each MyWords component displays a date tag, title, short description,
// image, and a link to the full article.
import MyWords from "./MyWords";
import APIPic from "../assets/API2.png";
import CodeImg from "../assets/Code.png";
import SunRise from "../assets/Sun.png";
import styled from "styled-components";

/* Wrapper for the entire My Words section */
const MyWordSection = styled.section`
  background-color: white;
`;

/* Section title styling */
const MyWordTitle = styled.h2`
  color: black;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding: 70px;
  }
`;

export default function MyTexts() {
  return (
    <MyWordSection id="words">
      <MyWordTitle>My Words</MyWordTitle>

      <MyWords
        tags="November 2025"
        title="Trusting My Gut and Ignoring My Brain"
        description="I haven't always known what I wanted to become. After high school, I spent a long period traveling, Australia, different parts of Asia, trying to understand myself and my place in the world. I met people living..."
        imageSrc={SunRise}
        imageAlt="Screenshot of a sunrise and two people jumping on the beach"
        articleUrl="https://www.notion.so/Trusting-My-Gut-2aa60ce5ce19809f8c01e9471879906b"
      />

      <MyWords
        tags="October 2025"
        title="Discovering the Power of APIs"
        description="Getting to work with APIs in the recipe website and the weather app project was another eye-opener for me. Until then, JavaScript had mostly been something I used to create interactions on..."
        imageSrc={APIPic}
        imageAlt="Picture with the title API and then a computer"
        articleUrl="https://www.notion.so/Discovering-the-Power-of-APIs-2aa60ce5ce1980f896a0e1fe5640fce7"
      />

      <MyWords
        tags="September 2025"
        title="To Dive Deeper into JavaScript"
        description="Getting the chance to dive deeper into JavaScript was an amazing journey for me, to build on the knowledge I already had and to truly expand it. Being able to understand the code more clearly..."
        imageSrc={CodeImg}
        imageAlt="Picture of a javascript code"
        articleUrl="https://www.notion.so/To-dive-deeper-into-JavaScript-2aa60ce5ce1980fca38ef1100c429538"
      />
    </MyWordSection>
  );
}
