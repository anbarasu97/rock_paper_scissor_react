import React from 'react'

const ScoreBoard = ({userCount, compCount}) => {
    return (
      <div className="score-board">
        <div className="badge" id="user-label">
          user
        </div>
        <div className="badge" id="computer-label">
          comp
        </div>
        <span id="user-score">{userCount}</span>:<span id="computer-score">{compCount}</span>
      </div>
    );
}

export default ScoreBoard
