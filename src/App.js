import React, {useCallback, useEffect, useState} from 'react';
import Question from './components/Question/Question';
import CategorySelector from './components/CategorySelector/CategorySelector';
import ResultModal from './components/ResultModal/ResultModal';
import Scoreboard from './components/Scoreboard/Scoreboard';
import NextQuestionButton from './components/NextQuestionButton/NextQuestionButton';
import './App.css';

const App = () => {
  const [question, setQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('any');
  const [isCorrect, setIsCorrect] = useState(null);

  const getNewQuestion = useCallback(() => {
    setIsCorrect(null);
    let url = 'https://opentdb.com/api.php?amount=1';
    if (selectedCategory !== 'any') {
      url += `&category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
      })
  }, [selectedCategory])

  useEffect(() => {
    getNewQuestion();
  }, [getNewQuestion, selectedCategory])

  const handleQuestionAnswered = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  return (
    <div className="app">
      {isCorrect !== null && <ResultModal
        isCorrect={isCorrect}
        question={question}
        getNewQuestion={getNewQuestion}
      />}

      <header className="question__header">
        <CategorySelector
          category={selectedCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard />
      </header>

      <main className="question__main">
        {question && <Question
          question={question}
          answerQuestion={handleQuestionAnswered}
        />}
      </main>

      <footer className="question__footer footer">
        <NextQuestionButton className={"footer__button"} getNewQuestion={getNewQuestion} />
      </footer>
    </div>
  );
}

export default App;
