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
  background-color: #f9f9f9;
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
  background: #111;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 260px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #333;
    transform: translateY(-1px);
  }
`;

/* Arrow icon that rotates depending on expand/collapse state */
const IconImage = styled.img`
  width: 24px;
  height: 24px;
  filter: invert(1);
  transition: transform 0.3s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const allProjects = [
  {
    title: "Movie-App",
    description:
      "A responsive multi-page web application built with React and React Router, using data from The Movie Database (TMDB) API. Dynamically displays movies and details using URL parameters, with a focus on API integration, reusable components, and user-friendly navigation.",
    imageSrc: MovieImg,
    imageAlt: "Screenshot of a Movie app",
    tags: ["React", "React Router", "Tailwind", "API"],
    liveUrl: "https://movie-app-reactrouter.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-movies",
  },
  {
    title: "Reading Room",
    description:
      "An accessibility-focused group project built through mob coding. Features semantic HTML, keyboard navigation, ARIA support, and strong color contrast. Collaborated using branches and merges in Git.",
    imageSrc: ReadingRoomImg,
    imageAlt: "Screenshot of a ReadingRoom website",
    tags: ["HTML5", "CSS3", "JavaScript", "Accessibility"],
    liveUrl: "https://the-reading-room-accesibility-project.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-accessibility",
    reverse: true,
  },
  {
    title: "Movie App – Figma Prototype",
    description:
      "A Figma prototype designed to make it easier for users to choose what to watch. Created during the Graphical User Interfaces course at Luleå University of Technology.",
    imageSrc: MovieAppImg,
    imageAlt: "Screenshots of MovieApp prototype",
    tags: ["Figma", "UX Design"],
    liveUrl:
      "https://www.figma.com/proto/DKP6X7bdCzr15DLYFb9ARf/Movie-App?node-id=238-1679&starting-point-node-id=301%3A786&t=mgHEJgOWMcnCentK-1&show-proto-sidebar=1",
  },
  {
    title: "Riddle Rush – Figma Prototype",
    description:
      "A graphical user interface designed in Figma for an interactive quiz game. Created during the Graphical User Interfaces course at Luleå University of Technology.",
    imageSrc: RiddleRushImg,
    imageAlt: "Screenshots of RiddleRush prototype",
    tags: ["Figma", "UX Design"],
    liveUrl:
      "https://www.figma.com/proto/6mTiPD05LYmwh27nDq3KrS/Riddle-Rush?node-id=599-2551&starting-point-node-id=599%3A2551&t=dkTUenL4cQhc9C0j-1",
    reverse: true,
  },
  {
    title: "Business Site",
    description:
      "A responsive business website built with HTML, CSS, and JavaScript, with a focus on design, usability, and structure.",
    imageSrc: BusinessSiteImg,
    imageAlt: "Screenshot of a coffee themed business site",
    tags: ["HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/AgnesSj01/js-project-business-site",
    liveUrl: "https://legacy-coffee.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "A collaborative weather application using the SMHI Weather API. Built through mob-programming, exploring real-time data fetching, structured JavaScript logic, and clean UI design.",
    imageSrc: WeatherAppImg,
    imageAlt: "Screenshot of a WeatherApp",
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    liveUrl: "https://weather-project-lar.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-weather-app",
    reverse: true,
  },
  {
    title: "Recipe Library",
    description:
      "A dynamic, responsive recipe library replacing static mock data with real recipe data from the Spoonacular API. Built during Technigo's bootcamp module focused on APIs, JSON, fetch() and Promises.",
    imageSrc: RecipeLibraryImg,
    imageAlt: "Screenshot of a Recipe Library website",
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    liveUrl: "https://inspiring-sundae-2d353c.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-recipe-library",
  },
  {
    title: "Todo App",
    description:
      "A React Todo app featuring Zustand for state management, localStorage persistence, and accessible UI. Users can create, toggle, and delete tasks with batch actions and keyboard navigation. Built with focus on clean architecture and separation of concerns.",
    imageSrc: Todoapp,
    imageAlt: "Screenshots of Todo-list",
    tags: ["React", "Zustand", "Accessibility", "State Management"],
    liveUrl: "https://agnestodoapp.netlify.app/",
    codeUrl: "https://github.com/AgnesSj01/js-project-todo",
    reverse: true,
  },
  {
    title: "Happy Thoughts",
    description:
      "A full-stack application with a custom Express.js backend and React frontend. Includes user authentication with bcrypt password hashing and token-based access control. Users can register, log in, and perform CRUD operations on thoughts — all protected routes require authentication. Deployed on Render with MongoDB Atlas.",
    imageSrc: Happy,
    imageAlt: "Screenshot Happy Thoughts site",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API", "Auth"],
    codeUrl:
      "https://github.com/AgnesSj01/js-project-happy-thoughts/blob/main/README.md",
    liveUrl: "https://agnes-happythoughtsproject.netlify.app/",
  },
  {
    title: "Cocktail App",
    description:
      "A mobile-first cocktail app built in Flutter and Dart as part of the Interaktion och Mobilitet course at Luleå University of Technology.",
    imageSrc: CoctailAppImg,
    imageAlt: "Screenshots from CoctailApp",
    tags: ["Flutter", "Dart"],
    codeUrl: "https://github.com/AgnesSj01/flutter_recept_app",
    reverse: true,
  },
  {
    title: "Hay Stack – Figma Prototype",
    description:
      "A real-world design brief in collaboration with Haystack, created during the Interaktion och Mobilitet course at Luleå University of Technology.",
    imageSrc: HayStackImg,
    imageAlt: "Screenshots of HayStack prototype",
    tags: ["Figma", "UX Design"],
    liveUrl:
      "https://www.figma.com/proto/tvyHQWabUvjfh6CvKQDXa9/Haystack-Hi-Fi-prototyp?node-id=340-6476&t=mjeqyGeD1oi3qzn6-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A11&starting-point-node-id=340%3A6476&show-proto-sidebar=1",
  },
];

export default function Projects() {
  // Controls whether all projects should be shown or only the first four
  const [showAll, setShowAll] = useState(false);

  // Either returns all projects or the first four
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <ProjectsSection id="projects">
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
