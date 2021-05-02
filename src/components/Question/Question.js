import React from 'react';
import shuffle from 'lodash.shuffle';
import './Question.css';

const Question = ({question, answerQuestion}) => {
  const answers = shuffle([...question.incorrect_answers, question.correct_answer]);

  return (
    <div className="question">
      <h2 className="question__title" dangerouslySetInnerHTML={{__html: question.question}} />

      {answers.map((answer, index) => (
        <button
          className="question__button button"
          key={index}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{__html: answer}}
        />
      ))}
    </div>
  );
}

export default Question;
