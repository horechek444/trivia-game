import React from 'react';
import './ResultModal.css';
import NextQuestionButton from "../NextQuestionButton/NextQuestionButton";

const ResultModal = ({isCorrect, question, getNewQuestion}) => {
  return (
    <div className={isCorrect ? "result-modal result-modal__is-correct" : "result-modal result-modal__is-wrong"}>
      <div className="overlay" />
      <div className="result-modal__content">
        {isCorrect && (
          <h3 className="result-modal__title">
            YOU WON!
          </h3>
        )}

        {!isCorrect && (
          <h3 className="result-modal__title">
            YOU LOST!
          </h3>
        )}

        {!isCorrect && (
        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong
            dangerouslySetInnerHTML={{ __html: question.correct_answer }}
          />
        </div>
        )}
        <NextQuestionButton className={"button"} getNewQuestion={getNewQuestion} />
      </div>
    </div>
  );
}

export default ResultModal;
