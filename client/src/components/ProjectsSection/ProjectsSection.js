import { useState, useCallback, useRef } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

// Configuration constants that could be moved to a separate config file
const CONFIG = {
  INITIAL_DISPLAY_COUNT: 3,
  SCROLL_OFFSET: 64,
  SCROLL_DELAY: 0,
  SCROLL_BEHAVIOR: "smooth",
};

/**
 * Projects Section Component
 * @component
 */

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      year: "2025",
      description:
        "A portfolio website showcasing my past and current work, along with contact methods for potential employers and clients.",
      features: ["Email Integration"],
      stack: ["React", "Node", "Sass", "DigitalOcean"],
      overview: {
        intro:
          "Built from the ground up with no CSS frameworks, this portfolio reflects a passion for writing my own code and focusing on the little details which make a product intuitive, scalable, and visually engaging.",
        para1:
          "The frontend was built with React and deployed through DigitalOcean. The UI and Aesthetic Design of this portfolio is not to showcase clean design, but to showcase a multitude of styles as well as my ability to code complex Javascript functions.",
        para2:
          "UX Design (user experience) was heavily focused on during this project. I went through a vigorous process of planning, wireframing, creating Figma mockups and style guidelines, testing and data collection, refinements, user flow improvements, and finally deployment.",
        para3:
          "This is more than a portfolio website, this is a reflection of my growth as a developer and my commitment to clean, intentional design. Every section, every animation, and every interaction has been crafted with precision to ensure a seamless user experience. It represents my future in the industry and my drive to build meaningful, impactful digital experiences.",
      },
      browser: "https://www.nickdoucette.dev/",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 2,
      title: "Capstone",
      year: "2024",
      description:
        "A comprehensive Formula 1 live tracker. Complete with user authentication, customizable user dashboard, live standings tracker, and live race session tracker.",
      overview: {
        intro:
          "This was the final project for my software engineering program, meaning it was a culmination of my full-stack development skills, combining React, Express, Node.js, and MySQL to build a dynamic, data-driven application. The project seamlessly integrates API interactions, user authentication with JWT, and a robust backend to deliver a secure and scalable experience.",
        para1:
          "Complete with a live race session tracker, users can follow every practice, qualifying, and race session during every Formula 1 race weekend. The session tracker page displays extremely in-depth info on the drivers, cars, and tracks that you will not see by just watching the race online or on TV.",
        para2:
          "Another key feature is the customizable dashboard, where users can personalize themes and interact with live data updates in real time. Every component was designed with a focus on performance, security, and user experience by ease of access to data. This project represents my ability to architect complex full-stack applications, manage state efficiently, and build intuitive digital solutions.",
        para3:
          "This was the first iteration of the product I call 'pitstop'. Further updates will be released in hopes to deploy this and refine the UI/UX.",
      },
      features: [
        "Authentication",
        "JWT",
        "API Integration",
        "Live Updates",
        "Selectable Themes",
      ],
      stack: ["React", "Express", "MySQL", "Node", "Sass"],
      browser: null,
      github: "https://github.com/nickdoucette24/capstone",
    },
    {
      id: 3,
      title: "Spectra",
      year: "2024",
      description:
        "Winning 1st place, Spectra is a comprehensive software built for Dell Technologies via the Dell Canada & BrainStation hackathon. It is a full-stack application built with React, Express, MySQL, and Python.",
      overview: {
        intro:
          "In June 2024, me and a team of 1 other Software Engineer, 2 Data Scientists, and 2 UX Designers participated in the Dell Technologies x BrainStation industry Hackathon. We were given 7 days to construct a functional and intuitive software which would allow the user to track competitor MSRP pricing and compare it against Dell's in-house products.",
        para1:
          "Days 1-4 consisted of the UX and Data teams designing the platform and Python scripts in collarboration with the engineers in order to set our limits and prioritize what we need to show and what we deemed unneccessary under the time constraints.",
        para2:
          "With the UI/UX design mostly complete, days 5-7 consisted mostly of morning to night coding. We were able to build a software that allowed the user to create an account, log in, view their personalized dashboard, view and sort a table referencing all competitor products and their status as an offender, send an email to the offending product's company contact, and edit their account settings.",
        para3:
          "This experience showcased mine and my teams ability to perform under pressure and still product a functional, complex, and intuitive product. This was a direct result of the countless days and late night hours spent learning new technical tools and refining my skills.",
      },
      features: [
        "Authentication",
        "Email Integration",
        "User Settings",
        "Sortable Tables",
      ],
      stack: ["React", "Express", "MySQL", "Python", "Node", "Sass", "Heroku"],
      browser: null,
      github:
        "https://github.com/nickdoucette24/brainstation-industryproject-team1",
    },
    {
      id: 4,
      title: "InStock",
      year: "2024",
      description:
        "InStock is an inventory management software designed to allow users to add each warehouse and individual item into a custom built database. This is a fullstack application where the frontend, backend, and API were all constructed from scratch.",
      overview: {
        intro:
          "A collaborative effort between a group of 5 other software engineers and I. This was the final assignment before our capstone project in my software engineering program, so it is a decent represenation of my skills at the time.",
        para1:
          "The frontend was built with React and the backend was built with Express and MySQL as we needed to create our own API and Database. The design and style guide were provided, meaning I had the opportunity to showcase my abilities to code a seamless API and integrate it into the frontend while adding complex usability options.",
        para2:
          "Through this software, the user is able to add and manage company warehouses and their locations, as well as add and manage individual items tied to each individual warehouse. The user views the data through sleek, dynamic tables.",
        para3:
          "This project taught me a lot about how APIs and databases work on a deeper level in conjunction with the frontend and I'm very grateful for that. The client and server files are in different repositories on github for those curious.",
      },
      features: [
        "Sortable Tables",
        "Inventory Management",
        "Location Management",
      ],
      stack: ["React", "Express", "Node", "Sass"],
      browser: null,
      github: "https://github.com/Clarkson9/instock-group2-api",
    },
    {
      id: 5,
      title: "BrainFlix",
      year: "2024",
      description:
        "BrainFlix is a YouTube clone project assigned as part of my software engineering program.",
      overview: {
        intro:
          "A mock database in the form of a linked JSON file provides the video and post data, while the frontend and backend middleware were all built up around it.",
        para1:
          "The user is able to play the selected video in the video player, view any of the video data below the video player, view the other videos in a 'Next Up' list on the side, and post comments to each individual video.",
        para2:
          "This project gave me a much better understanding of how databases function and how the data is stored locally and through the cloud.",
        para3:
          "The design and style guide were provided, meaning I could focus on constructing a clean and efficient API through Express.",
      },
      features: ["Video Player", "Dynamic Data", "Next Up List"],
      stack: ["React", "Node", "Sass"],
      browser: null,
      github: "https://github.com/nickdoucette24/BrainFlix",
    },
    {
      id: 6,
      title: "BandSite",
      year: "2023",
      description:
        "BandSite is a portfolio website showcasing a band's tour dates, gallery, information, and contact options.",
      overview: {
        intro:
          "One of the first projects in my software engineering program, BandSite allowed users to view and interact with a band and their fans.",
        para1:
          "There is a functional comment section where users can view and like comments made by other users or the band. The comments are likable through a provided database, meaning I had the opportunity to focus on the frontend and constructing seamless API endpoints.",
        para2:
          "BandSite was built using HTML, Vanilla Javascript, and CSS. Getting this understanding of the core languages behind the modern frameworks I use now was integral in my development as a programmer.",
        para3:
          "This project was completed individually over the course of a week.",
      },
      features: ["Comment Section", "Likes Counter", "Gallery Section"],
      stack: ["HTML", "Javascript", "Node", "CSS"],
      browser: null,
      github: "https://github.com/nickdoucette24/band-site",
    },
  ];

  // Memoized handlers to prevent unnecessary re-renders
  const handleShowMore = useCallback(() => {
    setShowAll((prevState) => !prevState);
    scrollToBottom();
  }, []);

  // Smoothly scrolls to the bottom of the projects container
  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (containerRef.current) {
        const containerBottom =
          containerRef.current.getBoundingClientRect().bottom;
        const scrollY =
          window.scrollY +
          containerBottom -
          window.innerHeight +
          CONFIG.SCROLL_OFFSET;

        window.scrollTo({
          top: scrollY,
          behavior: CONFIG.SCROLL_BEHAVIOR,
        });
      }
    }, CONFIG.SCROLL_DELAY);
  }, []);

  const displayed = showAll
    ? projects
    : projects.slice(0, CONFIG.INITIAL_DISPLAY_COUNT);

  return (
    <section className="projects" ref={containerRef}>
      <div className="projects__heading-container">
        <h2 className="projects__heading">My Work.</h2>
        <hr className="projects__divider" />
      </div>
      <div className="projects-container">
        {displayed.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              year={project.year}
              browser={project.browser}
              github={project.github}
              stack={project.stack}
              features={project.features}
              overview={project.overview}
            />
          </div>
        ))}
      </div>
      <button className="projects__toggle" onClick={handleShowMore}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default ProjectsSection;
