import React from 'react';
import { cardsData } from '../data/cardsData';
import './Cards.css';

const Cards = () => {
  return (
    <section id="skills" className="cards-section">
      <h2 className="section-title">My Skills & Expertise</h2>
      <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className="card">
            <div className="card-logo">{card.logo}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
