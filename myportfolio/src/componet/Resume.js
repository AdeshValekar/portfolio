import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <h2 className="text-3xl font-bold mb-6">Resume</h2>

            <a
                href="/adeshresume.pdf"
                download="Adesh_Valekar_Resume.pdf"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
