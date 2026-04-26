import React from 'react';
import './EventsList.css';

export default function EventsList({ events, onAddBet }) {
  return (
    <div className="events-list">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="no-events">Select a sport to view events</p>
      ) : (
        <div className="events-container">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.match}</h3>
                <span className="event-date">{event.date}</span>
              </div>
              
              <div className="odds-container">
                {event.odds.home && (
                  <button 
                    className="odd-btn"
                    onClick={() => onAddBet(event, 'home')}
                    title="Home Win"
                  >
                    <span className="odd-label">Home</span>
                    <span className="odd-value">{event.odds.home}</span>
                  </button>
                )}
                
                {event.odds.draw && (
                  <button 
                    className="odd-btn"
                    onClick={() => onAddBet(event, 'draw')}
                    title="Draw"
                  >
                    <span className="odd-label">Draw</span>
                    <span className="odd-value">{event.odds.draw}</span>
                  </button>
                )}
                
                {event.odds.away && (
                  <button 
                    className="odd-btn"
                    onClick={() => onAddBet(event, 'away')}
                    title="Away Win"
                  >
                    <span className="odd-label">Away</span>
                    <span className="odd-value">{event.odds.away}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
