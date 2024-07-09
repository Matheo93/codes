import React, { useState, useEffect } from 'react';
import { TextField, Button, Container } from '@mui/material';

const CodeEditor = ({ code, setCode }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title && code) {
      const existingCodes = JSON.parse(localStorage.getItem('codes')) || [];
      const newCode = { title, content: code };
      existingCodes.push(newCode);
      localStorage.setItem('codes', JSON.stringify(existingCodes));
      console.log("Code saved to local storage:", newCode);
      setTitle('');
      setCode('');
    } else {
      console.log("Title or code is missing.");
    }
  };

  return (
    <Container>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Enter your code"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Save button clicked");
          handleSubmit();
        }}
      >
        Save Code
      </Button>
    </Container>
  );
};

export default CodeEditor;
