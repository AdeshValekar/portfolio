import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <motion.nav
            className="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Adesh Valekar</h2>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>


                <li><a href="#skills">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? '🌞 Light' : '🌙 Dark'}
                    </button>
                </li> */}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
