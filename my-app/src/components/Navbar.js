import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo from '../Assets/images/Itothyalogo.png';

const Navbar = () => {
    const navLinks = [
        { path: '/', label: 'Home', icon: 'fas fa-home' },
        { path: '/about', label: 'About', icon: 'fas fa-info-circle' },
        { path: '/services', label: 'Services', icon: 'fas fa-concierge-bell' }, 
        { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
        
    ];

    const renderNavLinks = () => {
        return navLinks.map(({ path, label, icon }) => (
            <li className="nav-item" key={path}>
                <Link className="nav-link" to={path}>
                    <i className={icon}></i> {label}
                </Link>
            </li>
        ));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container text-center">
                <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Itothya Logo" style={{ width: '150px', marginLeft: '50px' }} />
                    <div>
                        <div className="brand-title">ITOTHYA</div>
                        <div className="brand-subtitle">General Agencies Ltd</div>
                        <div className="brand-tagline">You Can Trust Us</div>
                    </div>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {renderNavLinks()}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
