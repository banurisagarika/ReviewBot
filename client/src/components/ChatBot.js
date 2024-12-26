import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const getQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Capture the current question before clearing the input
    const currentQuestion = question;

    // Update chat history with the new question and a placeholder answer
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { question: currentQuestion, answer: "Thinking..." },
    ]);

    // Clear the input field
    setQuestion('');

    try {
      const response = await fetch('http://localhost:3000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: currentQuestion }),
      });

      const data = await response.json();

      setChatHistory((prevChatHistory) => {
        const updatedChatHistory = [...prevChatHistory];
        updatedChatHistory[updatedChatHistory.length - 1].answer = data.answer;
        return updatedChatHistory;
      });
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prevChatHistory) => {
        const updatedChatHistory = [...prevChatHistory];
        updatedChatHistory[updatedChatHistory.length - 1].answer = "Response from bot";
        return updatedChatHistory;
      });
    }
  };

  return (
    <Container className="mt-5">
      <div 
        className="chatbox p-3 position-relative" 
        style={{ 
          border: '1px solid black', 
          minHeight: '250px', 
          borderRadius: '15px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
          overflowY: 'auto',
          maxHeight: '400px'
        }}
      >
        {chatHistory.length === 0 ? (
          <p className="chatbox-message" style={{ color: 'gray', fontStyle: 'italic', fontSize: '16px'  }}>
            No Questions asked
          </p>
        ) : (
          chatHistory.map((chat, index) => (
            <div key={index} >
              <div style={{ textAlign: 'right', marginBottom: '5px' }}>
                <strong style={{ color: 'blue' }}>Question:</strong> {chat.question}
              </div>
              <div style={{ textAlign: 'left', marginBottom: '5px' }}>
                <strong style={{ color: 'green' }}>Answer:</strong> {chat.answer}
              </div>
            </div>
          ))
        )}
      </div>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Chatbot</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="question">
              <Form.Label>Ask a Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={getQuestion}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Ask
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chatbot;
