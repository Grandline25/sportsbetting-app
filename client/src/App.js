import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SportsList from './components/SportsList';
import EventsList from './components/EventsList';
import BettingSlip from './components/BettingSlip';

function App() {
  const [sports, setSports] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSports();
  }, []);

  useEffect(() => {
    if (selectedSport) {
      fetchEvents(selectedSport);
    }
  }, [selectedSport]);

  const fetchSports = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sports');
      setSports(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching sports:', error);
      setLoading(false);
    }
  };

  const fetchEvents = async (sport) => {
    try {
      const response = await axios.get('http://localhost:5000/api/events', {
        params: { sport }
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleAddBet = (event, oddType) => {
    const oddValue = event.odds[oddType];
    const newBet = {
      id: Date.now(),
      match: event.match,
      oddType: oddType.charAt(0).toUpperCase() + oddType.slice(1),
      odds: oddValue
    };
    setBets([...bets, newBet]);
  };

  const handleRemoveBet = (id) => {
    setBets(bets.filter(bet => bet.id !== id));
  };

  const handlePlaceBet = async (stake) => {
    try {
      const response = await axios.post('http://localhost:5000/api/bets', {
        bets: bets.map(b => ({ odds: b.odds })),
        stake: parseFloat(stake)
      });
      alert(`Bet placed! ID: ${response.data.betId}\nPotential win: $${response.data.potentialWin}`);
      setBets([]);
    } catch (error) {
      alert('Error placing bet');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>⚽ SportsBet</h1>
          <p>Clean. Simple. Sports Betting.</p>
        </div>
      </header>

      <div className="container main-content">
        <div className="left-panel">
          <SportsList 
            sports={sports} 
            selectedSport={selectedSport}
            onSelectSport={setSelectedSport}
          />
          <EventsList 
            events={events}
            onAddBet={handleAddBet}
          />
        </div>

        <div className="right-panel">
          <BettingSlip 
            bets={bets}
            onRemoveBet={handleRemoveBet}
            onPlaceBet={handlePlaceBet}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
