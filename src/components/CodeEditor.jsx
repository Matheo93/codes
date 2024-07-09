import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const CodeEditor = ({ code, setCode }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    if (title && code) {
      await addDoc(collection(db, 'codes'), {
        title,
        content: code
      });
      setTitle('');
      setCode('');
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
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save Code
      </Button>
    </Container>
  );
};

export default CodeEditor;
