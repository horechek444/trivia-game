import React, {useEffect, useState} from 'react';
import './Scoreboard.css';

const Scoreboard = ({isCorrect}) => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    if (isCorrect === null) return;

    if (isCorrect) {
      setCorrect(score => score + 1);
    } else {
      setWrong(score => score + 1);
    }
  }, [isCorrect])

  return (
    <div className="scoreboard">
      <div className="scoreboard__number">
        <strong className="scoreboard__score">{wrong}</strong>
        <span className="scoreboard__wrong">wrong</span>
      </div>
      <div className="scoreboard__number">
        <strong className="scoreboard__score">{correct}</strong>
        <span className="scoreboard__correct">correct</span>
      </div>
    </div>
  );
}

export default Scoreboard;
