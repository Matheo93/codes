
    import React, { useState } from 'react';
    import CodeEditor from './components/CodeEditor';
    import CodeDisplay from './components/CodeDisplay';

    function App() {
      const [code, setCode] = useState('');

      return (
        <div className="App">
          <h1>Check My Code</h1>
          <CodeEditor code={code} setCode={setCode} />
          <CodeDisplay code={code} />
        </div>
      );
    }

    export default App;
    