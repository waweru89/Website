import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Itothya</h1>
                <h2>Your Reliable Partner in Debt Recovery</h2>
                <p>
                    At Itothya, we provide comprehensive debt recovery solutions, ensuring businesses recover outstanding payments effectively while maintaining ethical standards.
                </p>
            </header>

            <section className="services">
                <h3>Our Services</h3>
                <ul>
                    <li><strong>Debt Recovery/Collection:</strong> Ethical and respectful debt collection services to help businesses recover overdue payments effectively.</li>
                    <li><strong>Investigation/Skip Tracing:</strong> Skilled location and background investigation to support compliant debt recovery.</li>
                    <li><strong>Process Serving:</strong> Professional document handling to ensure smooth and legal communication.</li>
                    <li><strong>Searches:</strong> Asset, financial, and employment searches to guide effective collection strategies.</li>
                    <li><strong>Debt Surveillance:</strong> Continuous monitoring and tracking for timely updates on debt accounts.</li>
                    <li><strong>Consultancy:</strong> Strategic advice on managing debt portfolios for maximum recovery.</li>
                    <li><strong>Reconciliation:</strong> Complete account reconciliation to verify balances, payments, and outstanding debts.</li>
                </ul>
            </section>

            <section className="testimonials">
                <h3>Client Testimonials</h3>
                <blockquote>
                    <p>“Itothya’s debt collection expertise secured our overdue accounts while preserving client relationships.”</p>
                    <footer>— John Doe, CFO of Financial Solutions Ltd.</footer>
                </blockquote>
                <blockquote>
                    <p>“Professional and efficient, Itothya made the recovery process smooth and respectful.”</p>
                    <footer>— Jane Smith, Operations Manager at ABC Corp.</footer>
                </blockquote>
            </section>

            <section className="call-to-action">
                <h3>Ready to Recover?</h3>
                <p>Partner with us to achieve effective, compliant debt recovery. Contact us today to discuss how we can support your financial goals.</p>
                <Link to="/about" className="learn-more-link">Learn more about us</Link>
            </section>

            <footer className="footer">
                <div className="company-profile">
                    <h3>Company Profile</h3>
                    <ul>
                        <li>Debt Recovery/Collection</li>
                        <li>Investigation/Skip Tracing</li>
                        <li>Process Serving</li>
                        <li>Searches</li>
                        <li>Debt Surveillance</li>
                        <li>Consultancy</li>
                        <li>Reconciliation</li>
                    </ul>
                </div>
                
                <div className="social-media">
                    <h3>Stay Connected</h3>
                    <p>Follow us on social media for the latest updates and insights:</p>
                    <ul className="social-media-icons">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Itothya. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
