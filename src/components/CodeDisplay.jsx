import React, { useEffect, useState } from 'react';
import { Paper, Typography, Container } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const CodeDisplay = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      const querySnapshot = await getDocs(collection(db, 'codes'));
      setCodes(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchCodes();
  }, []);

  return (
    <Container>
      {codes.map((code) => (
        <Paper key={code.id} style={{ padding: '20px', marginTop: '20px', whiteSpace: 'pre-wrap' }}>
          <Typography variant="h6">{code.title}</Typography>
          <pre>{code.content}</pre>
        </Paper>
      ))}
    </Container>
  );
};

export default CodeDisplay;
