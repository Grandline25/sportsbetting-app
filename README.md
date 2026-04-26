# SportsBet - Clean Sports Betting Platform

A modern, minimal sports betting platform built with React and Node.js.

## Features

✅ Clean dark theme UI  
✅ Browse multiple sports (Football, Basketball, Tennis, Cricket)  
✅ View upcoming events with live odds  
✅ Add/remove bets from slip  
✅ Calculate potential winnings  
✅ Place bets with stake input  
✅ Responsive design  

## Tech Stack

- **Frontend:** React 18, vanilla CSS
- **Backend:** Node.js, Express
- **Data:** Mock sports data (easily integrable with real APIs)

## Installation

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

## Running Locally

```bash
# Start both server and client
npm run dev

# Or separately:
npm run server    # Terminal 1
npm run client    # Terminal 2
```

- **Backend:** http://localhost:5000
- **Frontend:** http://localhost:3000

## Project Structure

```
sportsbetting-app/
├── server.js              # Express backend
├── client/
│   ├── src/
│   │   ├── App.js        # Main component
│   │   ├── App.css       # Main styles
│   │   └── components/   # React components
│   └── public/
├── package.json
└── README.md
```

## Features Breakdown

### Sports Selection
- Clean button grid for sport categories
- Active state highlighting
- Responsive layout

### Events Display
- Event cards with match details and date
- Odds buttons for different outcomes
- Hover effects and visual feedback
- Scrollable list

### Betting Slip
- Add/remove bets
- Real-time odds calculation
- Stake input with validation
- Potential winnings display
- Place bet functionality

## Future Enhancements

- User authentication & accounts
- Real sports APIs (ESPN, TheSportsDB)
- Bet history & statistics
- Live score updates
- Admin panel for managing events
- Payment integration

## License

MIT
