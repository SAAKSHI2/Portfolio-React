// Projects.jsx

import React from 'react';
import '../css/project.css';

const projectData = [
  {
    title: 'Social-Media-App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/images/projects/social_media_app.png', // Replace with your image path
  },
  {
    title: 'Chat-Application',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/images/projects/chat_application.png', // Replace with your image path
  },
  {
    title: 'Movie-Recommendation-System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/images/projects/movie_recommender.png', // Replace with your image path
  },
];

const Project = () => {
  return (
    <div id="projects" className="projects-container">
      {projectData.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.imageUrl} alt={`Project ${index + 1}`} className={"img"+index} />
          <div className={"project-details"+index}>
            <h3>{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
