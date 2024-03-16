import React from 'react';
import Profile from '../../assets/Profile.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css" 

function Home() {
    return ( 
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Lakshya Borasi.</span> Front-end Developer</h1>

                    <p className="home__description">I'm a Front-End Developer with React JS proficiency. Strong Python skills in web scraping & Machine Learning frameworks. Proven ability to craft user-friendly experiences & build data-driven applications. Eager to collaborate & contribute to innovative projects.</p>

                    <Link to='/about' className='button'>
                        More About Me <span className='button__icon'> <FaArrowRight /></span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    );
}

export default Home;