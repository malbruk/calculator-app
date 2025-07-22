import React, { useState } from 'react';
import './App.css';
import { Button } from '@shadcn/ui';
import { Input } from '@shadcn/ui';

const buttons: string[][] = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['C']
];

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string | null>(null);

  const handleClick = (value: string) => {
    if (value === 'C') {
      clearInputs();
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
      setResult(null);
    }
  };

  const clearInputs = () => {
    console.log("🤗");
    setInput('');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <div className="display">
        <Input type="text" value={input} readOnly className="calc-input" />
        <div className="calc-result">{result !== null ? result : ''}</div>
      </div>
      <div className="button-grid">
        {buttons.map((row, i) => (
          <div key={i} className="button-row">
            {row.map((btn) => (
              <Button key={btn} onClick={() => handleClick(btn)}>{btn}</Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;