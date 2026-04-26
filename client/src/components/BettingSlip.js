import React, { useState } from 'react';
import './BettingSlip.css';

export default function BettingSlip({ bets, onRemoveBet, onPlaceBet }) {
  const [stake, setStake] = useState('');

  const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1).toFixed(2);
  const potentialWin = (stake * totalOdds).toFixed(2);

  const handlePlaceBet = () => {
    if (!stake || parseFloat(stake) <= 0) {
      alert('Enter a valid stake');
      return;
    }
    onPlaceBet(stake);
    setStake('');
  };

  return (
    <div className="betting-slip">
      <h2>Betting Slip</h2>
      
      {bets.length === 0 ? (
        <p className="empty-slip">Click odds to add bets</p>
      ) : (
        <>
          <div className="bets-list">
            {bets.map(bet => (
              <div key={bet.id} className="bet-item">
                <div className="bet-info">
                  <p className="bet-match">{bet.match}</p>
                  <p className="bet-type">{bet.oddType}</p>
                </div>
                <div className="bet-right">
                  <span className="bet-odds">{bet.odds}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => onRemoveBet(bet.id)}
                    title="Remove bet"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="slip-divider"></div>

          <div className="slip-summary">
            <div className="summary-row">
              <span>Selections</span>
              <span>{bets.length}</span>
            </div>
            <div className="summary-row">
              <span>Total Odds</span>
              <span className="total-odds">{totalOdds}</span>
            </div>
          </div>

          <div className="stake-section">
            <label>Stake</label>
            <input
              type="number"
              placeholder="0.00"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>

          {stake && (
            <div className="potential-win">
              <span>Potential Win:</span>
              <span className="win-amount">${potentialWin}</span>
            </div>
          )}

          <button 
            className="place-bet-btn"
            onClick={handlePlaceBet}
            disabled={!stake || parseFloat(stake) <= 0}
          >
            Place Bet
          </button>
        </>
      )}
    </div>
  );
}
