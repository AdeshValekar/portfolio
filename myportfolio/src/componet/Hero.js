import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            className="hero"
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Profile Image */}
            <motion.div
                className="hero-image"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <img src="/profile.jpg" alt="Adesh Valekar" />
            </motion.div>

            {/* Hero Text */}
            <h1>Hello, I'm <span>Adesh Valekar 👋</span></h1>
            <p>Java Full Stack Developer | React & Spring Boot Enthusiast</p>
            <a href="#projects" className="btn">View My Work</a>
        </motion.section>
    );
};

export default Hero;
