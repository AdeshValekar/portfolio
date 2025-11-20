import React from 'react';
import { motion } from 'framer-motion';

const frontend = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'];
const backend = ['Java', 'Spring', 'Spring Boot', 'Hibernate', 'REST API'];
const tools = ['MySQL', 'JSON', 'Git', 'VS Code', 'Postman'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills
            </motion.h2>

            <motion.div className="skills-category" variants={containerVariants}>
                <h3>Frontend</h3>
                <div className="bar">
                    <span style={{ width: "90%" }}></span>
                </div>
                <ul>
                    {frontend.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#6c2bd9',
                                color: '#fff',
                                transition: { duration: 0.2 },
                            }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className="skills-category" variants={containerVariants}>
                <h3>Backend</h3>
                <ul>
                    {backend.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#6c2bd9',
                                color: '#fff',
                                transition: { duration: 0.2 },
                            }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Tools & Frameworks */}
            <motion.div className="skills-category" variants={containerVariants}>
                <h3>Tools & Frameworks</h3>
                <ul>
                    {tools.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: '#6c2bd9',
                                color: '#fff',
                                transition: { duration: 0.2 },
                            }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.section>
    );
};

export default Skills;
