import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCodeContext } from './CodeContext';

const CodeEditor = () => {
  const { id } = useParams();
  const { codes, addCode } = useCodeContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lines, setLines] = useState(1);

  useEffect(() => {
    const currentCode = codes.find(code => code.id === id);
    if (currentCode) {
      setTitle(currentCode.title);
      setContent(currentCode.content);
      setLines(currentCode.content.split('\n').length); // Met à jour le compteur de lignes
    }
  }, [id, codes]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setLines(e.target.value.split('\n').length);
  };

  const handleSubmit = () => {
    if (title && content) {
      const newCode = { id: id || Math.random().toString(36).substring(7), title, content };
      addCode(newCode);
      navigate(`/${newCode.id}`);
    }
  };

  return (
    <Container maxWidth="lg">
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mt: 3 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
        <TextField
          multiline
          rows={8}
          label="Enter your code"
          fullWidth
          value={content}
          onChange={handleContentChange}
          sx={{ backgroundColor: 'white', color: 'black', flex: 1 }}
          InputProps={{
            style: { color: 'black' }
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" style={{ color: 'black' }}>
            {lines} {lines > 1 ? 'lines' : 'line'}
          </Typography>
          <Button variant="contained" size="large" onClick={handleSubmit} sx={{ alignSelf: 'flex-end' }}>
            Save Code
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CodeEditor;
