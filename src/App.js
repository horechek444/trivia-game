import React, {useEffect, useState} from 'react';
import Question from './components/Question/Question';
import CategorySelector from './components/CategorySelector/CategorySelector';
import ResultModal from './components/ResultModal/ResultModal';
import Scoreboard from './components/Scoreboard/Scoreboard';
import './App.css';

const App = () => {

  const [question, setQuestion] = useState(null);

  useEffect(() => {
    getNewQuestion();
  }, [])

  const getNewQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=1';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      })
  }

  return (
    <div className="app">
      {/* <ResultModal />*/}

      <header className="question__header">
        <CategorySelector />
        <Scoreboard />
      </header>

      <main className="question__main">
        {question && <Question question={question}/>}
      </main>

      <footer className="question__footer footer">
        <button className="footer__button">Go to next question</button>
      </footer>
    </div>
  );
}

export default App;
