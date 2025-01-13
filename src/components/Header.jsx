import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h1>Burak Mumcu</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Work Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
