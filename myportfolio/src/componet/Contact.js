import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <motion.section
                // id="contact"
                // className="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2>Contact</h2>
                <p>
                    <Mail size={18} />Email:
                    <a href="mailto:adeshvalekar102@gmail.com" className="flex items-center gap-1">
                        adeshvalekar102@gmail.com
                    </a>
                    <br></br>
                    <Phone size={18} />Phone:
                    <a href="tel:+917057909184" className="flex items-center gap-1">
                        +917057909184
                    </a>
                    <br></br>
                    <Github size={18} /> GitHub:
                    <a href="https://github.com/AdeshValekar" target="_blank" className="flex items-center gap-1">
                        https://github.com/AdeshValekar
                    </a>
                    <br></br>
                    <Linkedin size={18} /> LinkedIn:
                    <a href="https://www.linkedin.com/in/valekar-adesh-2964a6255" target="_blank" className="flex items-center gap-1">
                        https://www.linkedin.com/in/valekar-adesh-2964a6255
                    </a>
                </p>
            </motion.section>
        </section>
    );
};

export default Contact;
