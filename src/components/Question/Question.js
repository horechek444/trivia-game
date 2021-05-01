import React from 'react';
import shuffle from 'lodash.shuffle';
import './Question.css';

const Question = ({question}) => {
  const answers = shuffle([...question.incorrect_answers, question.correct_answer]);

  return (
    <div className="question">
      <h2 className="question__title" dangerouslySetInnerHTML={{__html: question.question}} />

      {answers.map((answer, index) => (
        <button className="question__answer-button" key={index}>{answer}</button>
      ))}
    </div>
  );
}

export default Question;
