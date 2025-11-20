import React from 'react';
// import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Adesh Valekar</p>

            {/* <Button asChild variant="outline" size="sm">
                <a href="mailto:adeshvalekar102@gmail.com">Contact Me</a>
            </Button> */}

            <button asChild variant="outline" size="sm">
                <a href="mailto:adeshvalekar102@gmail.com">Contact Me</a>
            </button>
            <button asChild variant="outline" size="sm">
                <a href="https://github.com/AdeshValekar" target="_blank">GitHub</a>
            </button>
        </footer>
    );
};

export default Footer;
