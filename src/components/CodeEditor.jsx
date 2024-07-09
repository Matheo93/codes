import React from 'react';
import { TextField, Button, Container } from '@mui/material';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Container>
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
      <Button variant="contained" color="primary" onClick={() => console.log('Code saved')}>
        Save Code
      </Button>
    </Container>
  );
};

export default CodeEditor;
