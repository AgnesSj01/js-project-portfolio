// Component rendering a list of featured projects.
// Shows the first 4 projects by default and expands to show all when the user clicks the button.

import ProjectsCard from "./ProjectsCard";
import BusinessSiteImg from "../assets/Coffee2.png";
import WeatherAppImg from "../assets/WeatherApp.png";
import RecipeLibraryImg from "../assets/RecipeLibrary.png";
import ReadingRoomImg from "../assets/ReadingRoom.png";
import MovieAppImg from "../assets/MovieApp.png";
import RiddleRushImg from "../assets/RiddleRush.png";
import CoctailAppImg from "../assets/CoctailApp.png";
import HayStackImg from "../assets/HayStack.png";
import styled from "styled-components";
import { useState } from "react";
import ArrowDownIcon from "../assets/icons/ArrowDown.svg";
import Happy from "../assets/HappyThoughts2.png";
import MovieImg from "../assets/Movie-app.png";
import Todoapp from "../assets/Todoapp.png";

/* Wrapper section for the entire projects area */
const ProjectsSection = styled.section`
  background-color: white;
`;

/* Title styling for the projects section */
const ProjectsTitle = styled.h2`
  color: black;
  text-align: center;
  padding: 20px 0 10px;

  @media (min-width: 768px) {
    padding: 80px 0 40px;
  }
`;

/* Container for the "See more" button */
const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  padding-bottom: 60px;
`;

/* Button used to toggle showing more or fewer projects */
const MoreButton = styled.button`
  background: #ffffff;
  color: #000000;
  padding: 7px 10px;
  border-radius: 10px;
  border: 3px solid black;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  width: 280px;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    transform: scale(1.03);
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;

/* Arrow icon that rotates depending on expand/collapse state */
const IconImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

/* Array containing all project data */
const allProjects = [
  {
    title: "Business site",
    description:
      "This is a project I built during Technigo’s Web Development Bootcamp. The goal was to create a responsive business website using HTML, CSS, and JavaScript, with a focus on design, usability, and structure.",
    imageSrc: BusinessSiteImg,
    imageAlt: "Screenshot of a coffee themed business site",
    tags: ["HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/AgnesSj01/js-project-business-site",
    liveUrl: "https://legacy-coffee.netlify.app/",
  },
  {
    title: "Movie-App",
    description:
      "A responsive multi-page web application built with React and React Router, using data from The Movie Database (TMDB) API. Developed as part of a Technigo course project in collaboration with another student. The app dynamically displays movies and movie details using URL parameters, with a focus on API integration, reusable components, and clear, user-friendly navigation.",
    imageSrc: MovieImg,
    imageAlt: "Screenshot of a Recipe Library website",
    tags: ["React Router", "React", "Tailwind", "API"],
    liveUrl: "https://movie-app-reactrouter.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-movies",
    reverse: true,
  },
  {
    title: "Weather app",
    description:
      "This was our first mob-programming project during Technigo’s Web Development Bootcamp, where we collaboratively built a weather application using the SMHI Weather API. Together, we explored how to fetch and display real-time weather data, structure our JavaScript logic as a team, and design a clean, user-friendly interface.",
    imageSrc: WeatherAppImg,
    imageAlt: "Screenshot of a WeatherApp",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    liveUrl: "https://weather-project-lar.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-weather-app",
  },
  {
    title: "Happy Thoughts",
    description:
      "I developed a full-stack Happy Thoughts application with a custom Express.js backend and React frontend. The backend includes user authentication with bcrypt password hashing and token-based access control. Users can register, log in, and perform CRUD operations on thoughts (create, read, update, delete, like) - all protected routes require authentication. The API is deployed on Render and uses MongoDB Atlas for data storage. The frontend handles conditional rendering based on login state, stores tokens in localStorage, and displays error messages from the backend. This project deepened my understanding of building secure REST APIs, authentication flows, and connecting frontend to custom backends",
    imageSrc: Happy,
    imageAlt: "Screenshot Happy Thoughts site",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Authentication",
      "Bcrypt",
    ],
    codeUrl:
      "https://github.com/AgnesSj01/js-project-happy-thoughts/blob/main/README.md",
    liveUrl: "https://agnes-happythoughtsproject.netlify.app/",
    reverse: true,
  },

  {
    title: "Reading Room",
    description:
      "This was an accessibility-focused group project built through mob coding, where we collaborated using branches and merges in Git. We created a multi-page website with semantic HTML, keyboard navigation, ARIA support, and strong color contrast.",
    imageSrc: ReadingRoomImg,
    imageAlt: "Screenshot of a ReadingRoom website",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://the-reading-room-accesibility-project.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-accessibility",
  },
  {
    title: "Movie app – prototype / visual design",
    description:
      "As part of the course Grafiska användargränssnitt (Graphical User Interfaces) within the Digital Service Development program at Luleå University of Technology, my group and I designed a movie app aimed at making it easier for users to choose what to watch.",
    imageSrc: MovieAppImg,
    imageAlt: "Screenshots of pictures from MovieApp prototype",
    tags: ["Figma Design"],
    liveUrl:
      "https://www.figma.com/proto/DKP6X7bdCzr15DLYFb9ARf/Movie-App?node-id=238-1679&starting-point-node-id=301%3A786&t=mgHEJgOWMcnCentK-1&show-proto-sidebar=1",
    reverse: true,
  },
  {
    title: "Game app – prototype / visual design",
    description:
      "As part of the course Grafiska användargränssnitt (Graphical User Interfaces) within the Digital Service Development program at Luleå University of Technology, I designed a graphical user interface in Figma for an interactive quiz game.",
    imageSrc: RiddleRushImg,
    imageAlt: "Screenshots of pictures from RiddleRush prototype",
    tags: ["Figma Design"],
    liveUrl:
      "https://www.figma.com/proto/6mTiPD05LYmwh27nDq3KrS/Riddle-Rush?node-id=599-2551&starting-point-node-id=599%3A2551&t=dkTUenL4cQhc9C0j-1",
  },
  {
    title: "Cocktail app – visual design",
    description:
      "As part of the course Interaktion och Mobilitet in the Digital Service Development program at Luleå University of Technology, I created a mobile-first cocktail app built in Flutter and Dart.",
    imageSrc: CoctailAppImg,
    imageAlt: "Screenshots from CoctailApp",
    tags: ["Flutter", " Dart"],
    codeUrl: "https://github.com/AgnesSj01/flutter_recept_app",
    reverse: true,
  },
  {
    title: "Hay Stack – prototype / visual design",
    description:
      "As part of the course Interaktion och Mobilitet in the Digital Service Development program at Luleå University of Technology, my group and I worked on a real-world design brief in collaboration with Haystack.",
    imageSrc: HayStackImg,
    imageAlt: "Screenshots of pictures from the game app HayStack prototype",
    tags: ["Figma Design"],
    liveUrl:
      "https://www.figma.com/proto/tvyHQWabUvjfh6CvKQDXa9/Haystack-Hi-Fi-prototyp?node-id=340-6476&t=mjeqyGeD1oi3qzn6-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A11&starting-point-node-id=340%3A6476&show-proto-sidebar=1",
  },
  {
    title: "Recipe Library",
    description:
      "This project was created as part of Technigo’s Web Development Bootcamp, during the module focused on APIs, JSON, fetch() and Promises. The goal was to replace static mock data with real recipe data from the Spoonacular API and build a dynamic, responsive recipe library.",
    imageSrc: RecipeLibraryImg,
    imageAlt: "Screenshot of a Recipe Library website",
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    liveUrl: "https://inspiring-sundae-2d353c.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-recipe-library",
    reverse: true,
  },

  {
    title: "Todo App",
    description:
      "A React Todo app featuring Zustand for state management, localStorage persistence, and accessible UI. Users can create, toggle, and delete tasks with batch actions and keyboard navigation. Built with focus on clean architecture and separation of concerns.",
    imageSrc: Todoapp,
    imageAlt: "Screenshots of Todo-list",
    tags: [
      "React",
      "JavaScript",
      "Zustand",
      "localStorage",
      "Accessibility",
      "State Management",
    ],
    liveUrl: "https://agnestodoapp.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-todo",
  },
];

export default function Projects() {
  // Controls whether all projects should be shown or only the first four
  const [showAll, setShowAll] = useState(false);

  // Either returns all projects or the first four
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <ProjectsSection>
      <ProjectsTitle>Featured Projects</ProjectsTitle>

      {visibleProjects.map((project) => (
        <ProjectsCard key={project.title} {...project} />
      ))}
      {allProjects.length > 4 && (
        <ButtonWrapper>
          <MoreButton type="button" onClick={() => setShowAll((prev) => !prev)}>
            <IconImage src={ArrowDownIcon} alt="" open={showAll} />
            {showAll ? "See fewer projects" : "See more projects"}
          </MoreButton>
        </ButtonWrapper>
      )}
    </ProjectsSection>
  );
}
