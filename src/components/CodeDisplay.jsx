import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';

const CodeDisplay = () => {
  // useState pour gérer l'état local des codes récupérés depuis le local storage.
  const [codes, setCodes] = useState([]);

  // useEffect pour récupérer les codes du local storage une fois que le composant est monté.
  useEffect(() => {
    const savedCodes = JSON.parse(localStorage.getItem('codes')) || [];
    setCodes(savedCodes);
    console.log("Retrieved codes from local storage:", savedCodes);
  }, []);

  return (
    <Container>
      {codes.length === 0 ? (
        <Typography variant="h6">No codes available</Typography>
      ) : (
        codes.map((code, index) => (
          <Paper key={index} style={{ padding: '10px', marginBottom: '10px' }}>
            <Typography variant="h6">{code.title}</Typography>
            <Typography>{code.content}</Typography>
          </Paper>
        ))
      )}
    </Container>
  );
};

export default CodeDisplay;
