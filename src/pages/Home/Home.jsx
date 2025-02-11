import React, { useState, useEffect } from 'react';
import Profile from '../../assets/Profile122.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
    const roles = ["Python Developer", "Frontend Developer", "ML Engineer"];
    const [displayText, setDisplayText] = useState("");
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        if (!isDeleting && charIndex < currentRole.length) {
            setTimeout(() => {
                setDisplayText(prev => prev + currentRole[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 100); // Typing speed
        } 
        else if (isDeleting && charIndex > 0) {
            setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            }, 50); // Deleting speed
        } 
        else if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1000); // Delay before erasing
        } 
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
    }, [charIndex, isDeleting, currentRoleIndex]);

    return (
        <section className="home section grid">
            <img src={Profile} alt="Profile" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Lakshya Borasi.</span> 
                        <br /> {/* Force text to start on the next line immediately */}
                        <span className="typing-container">
                            <span className="typing-text">{displayText}</span>
                            <span className="cursor">|</span>
                        </span>
                    </h1>

                    <p className="home__description">
                        Aspiring Python Developer with experience in machine learning with projects like Vision-Language Model, Spam Email Classification model, and more AI-driven applications, and data-driven solutions. 
                        Strong programming skills in Python and JavaScript, with expertise in TensorFlow, Scikit-learn, SQL, and React JS. Passionate about solving real-world problems using AI/ML.
                    </p>

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
