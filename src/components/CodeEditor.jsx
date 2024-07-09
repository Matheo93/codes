import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const CodeEditor = ({ code, setCode }) => {
  const [title, setTitle] = useState("");
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    setLineCount(code.split("\n").length);
  }, [code]);

  const handleSubmit = () => {
    if (title && code) {
      const existingCodes = JSON.parse(localStorage.getItem("codes")) || [];
      const newCode = { title, content: code };
      existingCodes.push(newCode);
      localStorage.setItem("codes", JSON.stringify(existingCodes));
      console.log("Code saved to local storage:", newCode);
      console.log("All codes in local storage:", existingCodes);
      setTitle("");
      setCode("");
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
        style={{ marginBottom: "20px" }}
      />
      <Box sx={{ position: "relative", marginBottom: "20px" }}>
        <TextField
          label="Enter your code"
          multiline
          rows={20}
          variant="outlined"
          fullWidth
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ backgroundColor: "#000", color: "#fdf" }}
          InputProps={{
            style: { color: "#dff" },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            padding: "10px",
            color: "#fff",
            backgroundColor: "#000",
          }}
        >
          {lineCount} {lineCount === 1 ? "line" : "lines"}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Save button clicked");
          handleSubmit();
        }}
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      >
        Save Code
      </Button>
    </Container>
  );
};

export default CodeEditor;
