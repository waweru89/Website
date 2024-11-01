import React from 'react';
import './App.css';

const Contact = () => {
    return (
        <div className="container contact-container">
            <h1>Contact Us</h1>

            <section className="contact-intro">
                <h2>We’re Here to Help</h2>
                <p>
                    At Itothya, we value your inquiries and are committed to providing prompt and helpful responses. Whether you have questions about our services, need a consultation, or wish to discuss your project, our team is ready to assist you.
                </p>
            </section>

            <section className="contact-details">
                <h2>Get in Touch</h2>
                <p>You can reach us through the following channels:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:info@itothya.com">info@itothya.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+1234567890">+254700000000</a></li>
                    <li><strong>Address:</strong> 1234 Nairobi, Kenya</li>
                </ul>
            </section>

            <section className="contact-form">
                <h2>Send Us a Message</h2>
                <p>If you prefer, fill out the form below and we’ll get back to you as soon as possible:</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </section>

            <section className="social-media">
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media for the latest updates and insights:</p>
                <ul className="social-media-icons">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Contact;
