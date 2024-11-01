import React from 'react';
import './App.css';

const Services = () => {
    const servicesData = [
        {
            name: "Debt Recovery/Collection",
            description: "Ethical and respectful debt collection services to help businesses recover overdue payments effectively.",
            charge: "$500 per case"
        },
        {
            name: "Investigation/Skip Tracing",
            description: "Skilled location and background investigation to support compliant debt recovery.",
            charge: "$300 per investigation"
        },
        {
            name: "Process Serving",
            description: "Professional document handling to ensure smooth and legal communication.",
            charge: "$150 per service"
        },
        {
            name: "Searches",
            description: "Asset, financial, and employment searches to guide effective collection strategies.",
            charge: "$250 per search"
        },
        {
            name: "Debt Surveillance",
            description: "Continuous monitoring and tracking for timely updates on debt accounts.",
            charge: "$200 per month"
        },
        {
            name: "Consultancy",
            description: "Strategic advice on managing debt portfolios for maximum recovery.",
            charge: "$100 per hour"
        },
        {
            name: "Reconciliation",
            description: "Complete account reconciliation to verify balances, payments, and outstanding debts.",
            charge: "$400 per reconciliation"
        },
    ];

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <h2>Comprehensive Solutions Tailored to Your Needs</h2>
            <ul className="services-list">
                {servicesData.map((service, index) => (
                    <li key={index}>
                        <strong>{service.name}:</strong> {service.description} <br />
                        <em>Charge: {service.charge}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
