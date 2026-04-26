const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Mock data
const sports = [
  { id: 1, name: 'Football', icon: '⚽' },
  { id: 2, name: 'Basketball', icon: '🏀' },
  { id: 3, name: 'Tennis', icon: '🎾' },
  { id: 4, name: 'Cricket', icon: '🏏' }
];

const events = [
  {
    id: 1,
    sport: 'Football',
    match: 'Manchester United vs Liverpool',
    date: '2026-04-25 15:00',
    status: 'upcoming',
    odds: { home: 2.10, draw: 3.50, away: 3.40 }
  },
  {
    id: 2,
    sport: 'Football',
    match: 'Real Madrid vs Barcelona',
    date: '2026-04-25 20:00',
    status: 'upcoming',
    odds: { home: 1.95, draw: 3.60, away: 3.80 }
  },
  {
    id: 3,
    sport: 'Basketball',
    match: 'Lakers vs Celtics',
    date: '2026-04-25 22:00',
    status: 'upcoming',
    odds: { home: 2.30, away: 1.65 }
  },
  {
    id: 4,
    sport: 'Tennis',
    match: 'Djokovic vs Alcaraz',
    date: '2026-04-26 10:00',
    status: 'upcoming',
    odds: { home: 1.85, away: 2.10 }
  }
];

// Routes
app.get('/api/sports', (req, res) => {
  res.json(sports);
});

app.get('/api/events', (req, res) => {
  const sport = req.query.sport;
  if (sport) {
    return res.json(events.filter(e => e.sport === sport));
  }
  res.json(events);
});

app.post('/api/bets', (req, res) => {
  const { bets, stake } = req.body;
  
  if (!bets || bets.length === 0) {
    return res.status(400).json({ error: 'No bets selected' });
  }

  // Calculate odds
  let totalOdds = 1;
  bets.forEach(bet => {
    totalOdds *= bet.odds;
  });

  const potentialWin = (stake * totalOdds).toFixed(2);

  res.json({
    success: true,
    betId: 'BET' + Date.now(),
    bets: bets.length,
    stake,
    totalOdds: totalOdds.toFixed(2),
    potentialWin,
    message: 'Bet placed successfully'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
