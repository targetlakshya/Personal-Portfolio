import React from 'react';
import Info from '../../Components/Info.jsx';
import Stats from '../../Components/Stats';
import { FaDownload } from "react-icons/fa";
import CV from '../../assets/lakshya-resume.pdf';

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
                    </div>
                </div>

                <div className="stats grid">
                    <Stats />
                </div>
            </section>
        </main>
        );
}

export default About;