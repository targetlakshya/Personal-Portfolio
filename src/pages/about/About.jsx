import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import { FaDownload, FaArrowRight } from "react-icons/fa";  // Import icons
import Info from '../../Components/Info.jsx';
import Stats from '../../Components/Stats';
import CV from '../../assets/LakshyaBorasi-Resume.pdf';
import "./about.css";
import Skills from '../../Components/Skills.jsx';
import { resume } from '../../data.jsx';
import ResumeItem from '../../Components/ResumeItem.jsx';

function About() {
    return ( 
        <main className="section container">
            <section className="about">
                <h2 className="section__title">About <span>Me</span></h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>

                        <ul className="info__list grid">
                            <Info />
                        </ul>

                        <a href={CV} download='' className="button">Download Resume <span className="button__icon"><FaDownload /></span></a>

                        {/* Add gap between buttons */}
                        {/* <div className="button-gap"></div> */}

                        {/* Add the button to navigate to the Portfolio page with an icon */}
                        {'                           '}                                                                                                      
                        <Link to="/portfolio" className="button">
                            Go to Portfolio <span className="button__icon"><FaArrowRight /></span>
                        </Link>
                    </div>
                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>

            </section>

            <div className="separator"></div>

            <section className="skills">
                <h3 className="section__subtitle subtitle__center">My Skills</h3>

                <div className="skills__container grid">
                    <Skills />
                </div>

            </section>

            <div className="separator"></div>

            <section className="resume">
            <h3 className="section__subtitle subtitle__center">Work Experience</h3>

            <div className="resume__container grid">
                <div className="resume__data">
                    {resume.map((val) => {
                        if(val.category === "experience") {
                            return <ResumeItem key={val.id} {...val} />
                        }
                    })}
                </div>

            </div>

            <div className="separator"></div>

            <h3 className="section__subtitle subtitle__center">Education</h3>

            <div className="resume__container grid">
                <div className="resume__data">
                    {resume.map((val) => {
                        if(val.category === "education") {
                            return <ResumeItem key={val.id} {...val} />
                        }
                    })}
                </div>
            </div>

            <div className="separator"></div>

            <h3 className="section__subtitle subtitle__center">Position of Responsibility</h3>

            <div className="resume__container grid">
                <div className="resume__data">
                    {resume.map((val) => {
                        if(val.category === "position") {
                            return <ResumeItem key={val.id} {...val} />
                        }
                    })}
                </div>
            </div>

            </section>
        </main>
    );
}

export default About;
