import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import CodeDisplay from './components/CodeDisplay';

function App() {
  // useState est un hook qui permet de créer une variable d'état "code" et une fonction pour la mettre à jour "setCode".
  const [code, setCode] = useState('');

  return (
    <div className="App">
      <h1>Check My Codes</h1>
      {/* CodeEditor est un composant pour entrer et sauvegarder du code */}
      {/* On passe la variable "code" et la fonction "setCode" en tant que props */}
      <CodeEditor code={code} setCode={setCode} />
      {/* CodeDisplay est un composant pour afficher les codes sauvegardés */}
      <CodeDisplay />
    </div>
  );
}

export default App;
