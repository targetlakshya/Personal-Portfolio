import React from 'react';
import Profile from '../../assets/Profile122.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css" 

function Home() {
    return ( 
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Lakshya Borasi.</span> Python Developer</h1>

                    <p className="home__description">Aspiring Python Developer with experience in machine learning with project like Vision-Language Model, Spam Email Classification model and more AI-driven applications, and data-driven solutions. Strong programming skills in Python and JavaScript, with expertise in TensorFlow, Scikit-learn, SQL and React JS. Passionate about solving real-world problems using AI/ML.   </p>

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