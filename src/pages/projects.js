import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const projectList = [
  {
    title: "Rahastan Refinery",
    description: "Detail engineering of Shell & Tube Heat Exchangers. Time on project: 2 years.",
    link: "#" // Replace with actual link when available
  },
  {
    title: "Cementos Progreso",
    description: "Supervision of manufacturing, equipment installation, and commissioning of mechanical equipment (API-650 storage tank, water treatment system, and firefighting system). Time on project: 1 year.",
    link: "#" // Replace with actual link when available
  },
  {
    title: "Thor Químicos de México",
    description: "Responsible for the activities of mechanical completion and commissioning of mechanical equipment during the construction of two new plants. Time on project: 2 years.",
    link: "#" // Replace with actual link when available
  },
  {
    title: "Iquisa Noreste",
    description: "Detailed engineering of static equipment, including engineering, procurement, and support to construction area. Time on project: more than 1 year.",
    link: "#" // Replace with actual link when available
  },
  {
    title: "Refinería Talara",
    description: "Detailed engineering of crude oil storage tanks as per API-650. Time on project: 6 months.",
    link: "#" // Replace with actual link when available
  },
  {
    title: "Nissan Mexicana",
    description: "Discipline leader for development of detailed engineering, procurement, and inspection of static equipment. Time on project: 6 months.",
    link: "#" // Replace with actual link when available
  }
];


const Projects = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
        <p>A list of notable projects I have participated in</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {projectList.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="button small">
                Learn More
              </Link>
            </div>
          ))}
          
          <div className="warning-message" style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#fff3cd',
            color: '#856404',
            borderRadius: '0.25rem',
            border: '1px solid #ffeeba'
          }}>
            <strong>Note:</strong> This project list is not yet complete. More projects and information will be added soon.
          </div>
        </div>
      </section>
    </article>
  </Layout>
);

export default Projects;