import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  const navigate = useNavigate();

  const generateRandomLink = () => {
    const randomId = Math.random().toString(36).substring(7);
    navigate(`/${randomId}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Check My Code
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" onClick={generateRandomLink}>
          New Code
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
