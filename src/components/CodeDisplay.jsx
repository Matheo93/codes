import React from 'react';
import { Paper, Typography, Container } from '@mui/material';

const CodeDisplay = ({ code }) => {
  return (
    <Container>
      <Paper style={{ padding: '20px', marginTop: '20px', whiteSpace: 'pre-wrap' }}>
        <Typography variant="h6">Code Snippet:</Typography>
        <pre>{code}</pre>
      </Paper>
    </Container>
  );
};

export default CodeDisplay;
