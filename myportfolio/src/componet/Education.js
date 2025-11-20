import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="education">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6"
            >
                <h2 className="text-3xl font-bold mb-8 text-blue-700">
                    Education
                </h2>

                <ul className="space-y-4 text-lg text-gray-700">
                    <li>
                        🎓 <strong>MCA</strong> – Punyashlok Ahilyadevi Holkar Solapur University (2023–2025) – <span className="font-semibold">69%</span>
                    </li>
                    <li>
                        💻 <strong>B.Sc. (Computer Science)</strong> – Savitribai Phule Pune University (2021–2023) – <span className="font-semibold">74.95%</span>
                    </li>
                    <li>
                        🏫 <strong>12th</strong> – Maharashtra Board (2020) – <span className="font-semibold">52.46%</span>
                    </li>
                    <li>
                        🏫 <strong>10th</strong> – Maharashtra Board (2018) – <span className="font-semibold">77.40%</span>
                    </li>
                </ul>
            </motion.div>
        </section>
    );
};

export default Education;
