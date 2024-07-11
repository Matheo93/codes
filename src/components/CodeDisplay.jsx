import React from 'react';
import { Container, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCodeContext } from './CodeContext';
import { Link } from 'react-router-dom';

const CodeDisplay = () => {
  const { codes, deleteCode } = useCodeContext();

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Saved Codes
      </Typography>
      {codes.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center" sx={{ mt: 4 }}>
          Créer votre premier partage de code en allant sur <Link to="/editor">New Code</Link>
        </Typography>
      ) : (
        <List>
          {codes.map((code) => (
            <ListItem 
              key={code.id} 
              sx={{ 
                backgroundColor: 'white', 
                color: 'black', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                marginBottom: '16px', 
                padding: '16px'
              }}
            >
              <ListItemText 
                primary={<Link to={`/${code.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{code.title}</Link>} 
              />
              <IconButton edge="end" aria-label="delete" onClick={() => deleteCode(code.id)}>
                <DeleteIcon sx={{ color: 'black' }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default CodeDisplay;
