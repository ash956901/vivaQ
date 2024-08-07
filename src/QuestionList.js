import React from 'react';
import './QuestionList.css';

function QuestionList({ questions }) {
  const groupedQuestions = questions.reduce((acc, curr) => {
    const { name, topic, question, id } = curr;
    const key = `${name}-${topic}`;
    if (!acc[key]) {
      acc[key] = { name, topic, questions: [], id };
    }
    acc[key].questions.push(question);
    return acc;
  }, {});

  return (
    <div className="question-list">
      <h2>Submitted Questions</h2>
      <div className="grid">
        {Object.values(groupedQuestions).map(({ name, topic, questions, id }) => (
          <div key={id} className="card">
            <h3>{name}</h3>
            <p><strong>Topic:</strong> {topic}</p>
            <ul>
              {questions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
