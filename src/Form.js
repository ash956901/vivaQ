import React, { useState } from 'react';
import './Form.css';

function Form({ addQuestion }) {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && topic && question) {
      addQuestion(name, topic, question);
      setName('');
      setTopic('');
      setQuestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Student Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Topic Name:</label>
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Viva Questions:</label>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
