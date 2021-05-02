import React, {useCallback, useEffect, useState} from 'react';
import Question from './components/Question/Question';
import CategorySelector from './components/CategorySelector/CategorySelector';
import ResultModal from './components/ResultModal/ResultModal';
import Scoreboard from './components/Scoreboard/Scoreboard';
import NextQuestionButton from './components/NextQuestionButton/NextQuestionButton';
import './App.css';
import useTrivia from "./hooks/useTrivia";

const App = () => {
  const {question, category, setCategory, getQuestion} = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  const handleQuestionAnswered = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  const handleNextQuestion = () => {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="app">
      {isCorrect !== null && <ResultModal
        isCorrect={isCorrect}
        question={question}
        getNewQuestion={handleNextQuestion}
      />}

      <header className="question__header">
        <CategorySelector
          category={category}
          chooseCategory={setCategory}
        />
        <Scoreboard
          isCorrect={isCorrect}
        />
      </header>

      <main className="question__main">
        {question && <Question
          question={question}
          answerQuestion={handleQuestionAnswered}
        />}
      </main>

      <footer className="question__footer footer">
        <NextQuestionButton
          className={"footer__button"}
          getNewQuestion={handleNextQuestion}
        />
      </footer>
    </div>
  );
}

export default App;
