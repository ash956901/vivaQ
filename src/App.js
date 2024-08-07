import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import QuestionList from './QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (name, topic, question) => {
    setQuestions([...questions, { id: uuidv4(), name, topic, question }]);
  };

  return (
    <div className="App">
      <h1>Viva Questions</h1>
      <Form addQuestion={addQuestion} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
