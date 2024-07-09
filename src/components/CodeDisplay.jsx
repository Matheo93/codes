import React, { useEffect, useState } from "react";
import { Paper, Typography, Container } from "@mui/material";

const CodeDisplay = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const storedCodes = JSON.parse(localStorage.getItem("codes")) || [];
    console.log("Fetched codes from local storage on load:", storedCodes);
    setCodes(storedCodes);
  }, []);

  return (
    <Container>
      {codes.length > 0 ? (
        codes.map((code, index) => (
          <Paper
            key={index}
            style={{
              padding: "20px",
              marginTop: "20px",
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography variant="h6">{code.title}</Typography>
            <pre>{code.content}</pre>
          </Paper>
        ))
      ) : (
        <Typography variant="body1">No code snippets found.</Typography>
      )}
    </Container>
  );
};

export default CodeDisplay;
