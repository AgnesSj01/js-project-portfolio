import MyWords from "./MyWords";
import APIPic from "../assets/API2.png";
import CodeImg from "../assets/Code.png";
import SunRise from "../assets/Sun.png";
import styled from "styled-components";

const MyWordSection = styled.section`
  background-color: white;
`;

const MyWordTitle = styled.h2`
  color: black;
  text-align: center;
  padding: 70px;
`;

export default function MyTexts() {
  return (
    <MyWordSection>
      <MyWordTitle>My Words</MyWordTitle>

      <MyWords
        tags="November 13th 2025"
        title="Trusting My Gut"
        description="I haven’t always known what I wanted to become. After high school, I spent a long period traveling, Australia, different parts of Asia, trying to understand myself and my place in the world. I met people living completely different lives from my own, and those experiences taught me how important it is to stay curious..."
        imageSrc={SunRise}
        imageAlt="Screenshot of a sunrise and two people jumping on the beach"
        articleUrl="https://www.notion.so/Trusting-My-Gut-2aa60ce5ce19809f8c01e9471879906b"
      />
      <MyWords
        tags="September 2025"
        title="To dive deeper into JavaScript"
        description="Getting the chance to dive deeper into JavaScript was an amazing journey for me ,to build on the knowledge I already had and to truly expand it. Being able to understand the code more clearly and gain a deeper sense of what I’m actually doing when I write it has been incredibly rewarding. In my first Technigo project..."
        imageSrc={CodeImg}
        imageAlt="Picture of a javascript code"
        articleUrl="https://www.notion.so/To-dive-deeper-into-JavaScript-2aa60ce5ce1980fca38ef1100c429538"
      />
      <MyWords
        tags="October 2025"
        title="Discovering the Power of APIs"
        description="Getting to work with APIs in the recipe website and the weather app project was another eye-opener for me. Until then, JavaScript had mostly been something I used to create interactions on a page, but suddenly, it became a way to connect my projects with the real world. Being able to fetch live data, display it..."
        imageSrc={APIPic}
        imageAlt="Picture with the title API and then a computer"
        articleUrl="https://www.notion.so/Discovering-the-Power-of-APIs-2aa60ce5ce1980f896a0e1fe5640fce7"
      />
    </MyWordSection>
  );
}
