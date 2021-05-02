import React from 'react';

const NextQuestionButton = ({className, getNewQuestion}) => {
  return (
    <button
      className={className}
      onClick={getNewQuestion}
    >
      Go to next question
    </button>
  );
};

export default NextQuestionButton;
