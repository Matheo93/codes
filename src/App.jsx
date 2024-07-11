import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/CodeDisplay';
import CodeEditor from './components/CodeEditor';
import Header from './components/Header';
import { CodeProvider } from './components/CodeContext';

function App() {
  return (
    <CodeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/:id" element={<CodeEditor />} />
        </Routes>
      </Router>
    </CodeProvider>
  );
}

export default App;
