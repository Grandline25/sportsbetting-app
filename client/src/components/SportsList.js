import React from 'react';
import './SportsList.css';

export default function SportsList({ sports, selectedSport, onSelectSport }) {
  return (
    <div className="sports-list">
      <h2>Sports</h2>
      <div className="sports-grid">
        {sports.map(sport => (
          <button
            key={sport.id}
            className={`sport-btn ${selectedSport === sport.name ? 'active' : ''}`}
            onClick={() => onSelectSport(sport.name)}
          >
            <span className="sport-icon">{sport.icon}</span>
            <span className="sport-name">{sport.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
