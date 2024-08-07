import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import QuestionList from './QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get('http://localhost:5000/questions');
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  const addQuestion = async (name, topic, question) => {
    const res = await axios.post('http://localhost:5000/questions', { name, topic, question });
    setQuestions([...questions, res.data]);
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
