import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Online Bakery Shop (E-Commerce Web App)', description: 'Built a full-stack e-commerce platform for online bakery products. Implemented secure login, order management, and RESTful APIs. Used Spring Boot microservices for scalable backend architecture.' },
    // { title: 'Project Two', description: 'Description of project two' },
    // { title: 'Project Three', description: 'Description of project three' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">

            <motion.section
                // id="projects"
                // className="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2>Projects</h2>
                <div className="project-list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </section>
    );
};

export default Projects;
