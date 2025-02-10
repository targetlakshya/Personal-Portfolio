import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaInstagram
} from "react-icons/fa";
import axios from 'axios';
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('');

        try {
            const res = await axios.post('https://api.web3forms.com/submit', {
                access_key: "82f1ddca-cf28-4242-b7c3-5dd0ad4ce9d4", // Replace with your Web3Forms access key
                ...formData
            });

            if (res.data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setShowSuccess(true);

                // Hide success message after 3 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000);
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Error sending message.');
        }

        setIsSending(false);
    };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In<span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy!</h3>
                    <p className="contact__description">
                        Feel free to get in touch. I'm always open to discussing projects and opportunities.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Mail me</span>
                                <h4 className="info__desc">thetarget018@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />
                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">+91 9589362921</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.facebook.com/lakshya.borasi.52" className="contact__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/the__lakshya" className="contact__social-link">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/lakshya-borasi/" className="contact__social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/lakshyaborasi/" className="contact__social-link">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="form__control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="form__control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Your Subject"
                                className="form__control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="form__control textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Animated Send Button */}
                    <motion.button
                        type="submit"
                        className="button"
                        whileTap={{ scale: 0.95 }}
                        disabled={isSending}
                    >
                        {isSending ? (
                            <motion.span
                                className="button__icon contact__button-icon"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                <FiSend />
                            </motion.span>
                        ) : (
                            <>
                                Send Message
                                <span className="button__icon contact__button-icon">
                                    <FiSend />
                                </span>
                            </>
                        )}
                    </motion.button>
                </form>

                {/* Animated Success Message */}
                {showSuccess && (
                    <motion.div
                        className="contact__status success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FiCheckCircle className="success-icon" /> Message Sent Successfully!
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Contact;
