import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
