import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const CodeEditor = ({ code, setCode }) => {
  // useState est utilisé pour gérer l'état local du titre du code et du nombre de lignes.
  const [title, setTitle] = useState("");
  const [lineCount, setLineCount] = useState(0);

  // useEffect est un hook qui permet d'exécuter du code après que le composant a été rendu.
  // Ici, il met à jour le nombre de lignes de code chaque fois que le contenu du code change.
  useEffect(() => {
    setLineCount(code.split("\n").length);
  }, [code]);

  const handleSubmit = () => {
    if (title && code) {
      // Récupère les codes existants depuis le local storage, ou un tableau vide s'il n'y en a pas.
      const existingCodes = JSON.parse(localStorage.getItem("codes")) || [];
      // Crée un nouvel objet de code avec le titre et le contenu du code.
      const newCode = { title, content: code };
      // Ajoute le nouveau code à la liste des codes existants.
      existingCodes.push(newCode);
      // Sauvegarde la liste mise à jour dans le local storage.
      localStorage.setItem("codes", JSON.stringify(existingCodes));
      console.log("Code saved to local storage:", newCode);
      console.log("All codes in local storage:", existingCodes);
      // Réinitialise les champs de titre et de contenu du code.
      setTitle("");
      setCode("");
    } else {
      console.log("Title or code is missing.");
    }
  };

  return (
    <Container>
      {/* Champ de saisie pour le titre du code */}
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Box sx={{ position: "relative", marginBottom: "20px" }}>
        {/* Champ de saisie pour le contenu du code */}
        <TextField
          label="Enter your code"
          multiline
          rows={20}
          variant="outlined"
          fullWidth
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ backgroundColor: "#fff", color: "#000" }}
          InputProps={{
            style: { color: "#000" },
          }}
        />
        {/* Affiche le nombre de lignes du code */}
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
      {/* Bouton pour sauvegarder le code */}
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
