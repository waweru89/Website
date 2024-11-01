import React from 'react';
import './App.css'; 
import organogramImage from '../Assets/images/organogram.png'; 

const About = () => {
    return (
        <div className="container about-container">
            <h1>About Us</h1>

            <section>
                <h2>Welcome to Itothya</h2>
                <p>
                    Your trusted partner in navigating the digital landscape. Founded by a team of passionate tech enthusiasts, we are dedicated to providing innovative IT solutions that empower businesses to thrive in the ever-evolving technological world.
                </p>
            </section>

            <section>
                <h2>Our Mission</h2>
                <p>
                    At Itothya, our mission is to harness the power of technology to create meaningful impact for our clients. We strive to deliver tailored solutions that not only meet but exceed expectations, helping organizations unlock their full potential. Our commitment to excellence and customer satisfaction drives everything we do.
                </p>
            </section>

            <section>
                <h2>Our Vision</h2>
                <p>
                    We envision a future where technology seamlessly integrates with business, fostering growth and innovation. By staying at the forefront of industry trends and advancements, we aim to be a catalyst for change, enabling our clients to adapt and succeed in a digital-first world.
                </p>
            </section>

            <section>
                <h2>What We Do</h2>
                <ul>
                    <li><strong>Custom Software Development:</strong> We design and develop bespoke software solutions tailored to your unique business requirements.</li>
                    <li><strong>Web Development:</strong> Our team creates stunning, user-friendly websites that engage visitors and drive conversions.</li>
                    <li><strong>IT Consulting:</strong> We provide expert guidance on technology strategy, infrastructure, and best practices to help you make informed decisions.</li>
                    <li><strong>Cloud Solutions:</strong> We help businesses migrate to the cloud, enhancing scalability, flexibility, and security.</li>
                    <li><strong>Cybersecurity:</strong> Our proactive approach to cybersecurity ensures that your data and systems are protected against evolving threats.</li>
                    <li><strong>Digital Marketing:</strong> We offer comprehensive digital marketing services to enhance your online presence and reach your target audience effectively.</li>
                </ul>
            </section>

            <section>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Innovation:</strong> We believe in pushing boundaries and exploring new ideas to deliver cutting-edge solutions.</li>
                    <li><strong>Integrity:</strong> We uphold the highest standards of honesty and transparency in all our interactions.</li>
                    <li><strong>Collaboration:</strong> We work closely with our clients, fostering a collaborative environment to ensure their needs are met.</li>
                    <li><strong>Excellence:</strong> We are committed to delivering high-quality solutions that drive success.</li>
                </ul>
            </section>

            <section>
                <h2>Meet Our Team</h2>
                <p>
                    Our diverse team of experts brings together a wealth of experience and knowledge in various domains of technology. We are not just IT professionals; we are problem solvers, creative thinkers, and innovators who are passionate about what we do.
                </p>
            </section>

            <section>
                <h2>Why Choose Itothya?</h2>
                <p>
                    Choosing Itothya means choosing a partner who understands your business and is committed to your success. We take the time to understand your goals, challenges, and industry landscape, allowing us to provide tailored solutions that truly make a difference.
                </p>
            </section>

           <section>
                <h2>Organogram</h2>
                <img src={organogramImage} alt="/home/ubuntu/Documents/phase-2/Website/my-app/src/Assets/images/organogram.png" style={{ maxWidth: '100%', height: 'auto' }} />
            </section>
        </div>
    );
};

export default About;
