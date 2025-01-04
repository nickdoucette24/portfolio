import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      year: "2025",
      description:
        "My personal portfolio showcasing my current work, abilities, and allowing potential employers and clients a space to get in contact.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      link: "/projects/portfolio",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 2,
      title: "Spectra",
      year: "2024",
      description:
        "A comprehensive dashboard built for Dell Technologies via the Dell Canada x BrainStation hosted hackathon.",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Express", "MySQL", "Python", "Node"],
      link: "/projects/spectra",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 3,
      title: "InStock",
      year: "2024",
      description: "",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Express", "Local Database", "Node"],
      link: "/projects/instock",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 4,
      title: "BrainFlix",
      year: "2024",
      description: "",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      link: "/projects/brainflix",
      github: "https://github.com/nickdoucette24/portfolio",
    },
    {
      id: 5,
      title: "BandSite",
      year: "2023",
      description: "",
      features: [
        "Authentication",
        "user Login",
        "Email Integration",
        "Backend",
        "Frontend",
        "User Settings",
      ],
      stack: ["React", "Node"],
      link: "/projects/bandsite",
      github: "https://github.com/nickdoucette24/portfolio",
    },
  ];
  return (
    <div className="projects">
      <h2 className="projects__heading">My Work</h2>
      <hr className="projects__divider" />
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
