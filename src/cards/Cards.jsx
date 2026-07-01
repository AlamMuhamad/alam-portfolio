import React from 'react';
// Agar aap react-icons use kar rahe hain to ye icons best hain, warna aap images bhi laga sakte hain
import { FaShopify, FaCode, FaRocket, FaMobileAlt, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import './Cards.css';

const cardsData = [
  {
    id: 1,
    logo: <FaShopify />,
    title: "Custom Liquid Dev",
    description: "Advanced Shopify 2.0 themes, custom sections, and complex Liquid logic from scratch."
  },
  {
    id: 2,
    logo: <FaCode />,
    title: "React & Headless",
    description: "Building modern storefronts using React.js and Shopify Hydrogen for blazing fast speed."
  },
  {
    id: 3,
    logo: <FaRocket />,
    title: "Performance Expert",
    description: "Optimizing Core Web Vitals and achieving 90+ PageSpeed scores for Shopify stores."
  },
  {
    id: 4,
    logo: <FaMobileAlt />,
    title: "UI/UX Optimization",
    description: "Mobile-first responsive designs that ensure high conversion rates on all devices."
  },
  {
    id: 5,
    logo: <FaDatabase />,
    title: "App & API Sync",
    description: "Integrating 3rd party APIs, Metafields, and complex App configurations seamlessly."
  },
  {
    id: 6,
    logo: <FaPaintBrush />,
    title: "Theme Migration",
    description: "Flawless migration from old themes to Shopify 2.0 or from other platforms to Shopify."
  }
];

const Cards = () => {
  return (
    <section id="skills" className="cards-section">
      <div className="section-header">
        <span className="sub-title">Expertise</span>
        <h2 className="section-title">Technical Mastery</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className="skill-card">
            <div className="card-inner">
              <div className="card-icon-wrap">{card.logo}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="card-border-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;