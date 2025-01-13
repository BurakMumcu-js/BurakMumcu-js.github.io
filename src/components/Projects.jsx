import React, { useEffect, useState } from 'react';
import '../css/Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from GitHub API
        fetch('https://api.github.com/users/burak-mumcu/repos')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section id="projects">
            <div className="section-content">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-item">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
