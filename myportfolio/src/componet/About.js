import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about" >

            <motion.section

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2>About Me</h2>
                <p>
                    Hi, I'm Adesh Valekar, a dedicated Full Stack Developer skilled in React.js, Java, HTML, CSS, JS. I have completed a Java Full Stack Development course from Yess Infotech, Hadapsar, where I gained strong practical knowledge of frontend and backend technologies.            </p>
            </motion.section>
        </section>
    );
};

export default About;
