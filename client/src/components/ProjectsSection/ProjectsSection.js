import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      year: "2025",
      description:
        "Built from the ground up with no CSS frameworks, my portfolio reflects a passion for writing my own code and focusing on the little details which make a product intuitive, scalable, and visually engaging.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      browser: "www.google.com",
      link: "/projects/portfolio",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 2,
      title: "Spectra",
      year: "2024",
      description:
        "Winning 1st place, Spectra is a comprehensive dashboard built for Dell Technologies via the Dell Canada & BrainStation hackathon. It allows the user to track competitor pricings for each product against your own MSRP, then view and contact offenders. This is a fullstack application where the frontend, backend, and API were all constructed from scratch.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Express", "MySQL", "Python", "Node"],
      browser: "www.google.com",
      link: "/projects/spectra",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 3,
      title: "InStock",
      year: "2024",
      description:
        "InStock is an inventory management software designed to allow users to add each warehouse and individual item into a custom built database. This is a fullstack application where the frontend, backend, and API were all constructed from scratch.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Express", "Local Database", "Node"],
      browser: "www.google.com",
      link: "/projects/instock",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 4,
      title: "BrainFlix",
      year: "2024",
      description:
        "BrainFlix is a YouTube clone project. A mock database provides the video and post data, while the frontend and middleware were all built up around it.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      browser: "www.google.com",
      link: "/projects/brainflix",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 5,
      title: "BandSite",
      year: "2023",
      description:
        "BandSite is a portfolio website showcasing a band's tour dates, gallery, information, and contact options. There is also a functional comment section where users can leave and like comments. This is a fullstack application with a mock database to store the comments.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      browser: "www.google.com",
      link: "/projects/bandsite",
      github: "https://github.com/nickdoucette24/portfolio",
    },
  ];

  const handleShowMore = () => {
    setShowAll((prevState) => !prevState);
  };

  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="projects">
      <h2 className="projects__heading">My Work.</h2>
      <hr className="projects__divider" />
      <div className="projects-container">
        {displayed.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            year={project.year}
            browser={project.browser}
            github={project.github}
          />
        ))}
      </div>
      <button className="projects__toggle" onClick={handleShowMore}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ProjectsSection;
