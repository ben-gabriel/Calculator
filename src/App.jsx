import React, { useState } from 'react';
import Button from './components/Button';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <input
          type="text"
          value={input}
          className="w-full px-2 py-1 mb-2 text-lg rounded-md"
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <Button onClick={handleClear} value="Clear" className="col-span-3 bg-gray-400 text-white" />
          <Button onClick={handleButtonClick} value="/" className="bg-yellow-500 text-white" />
          <Button onClick={handleButtonClick} value="7" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="8" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="9" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="*" className="bg-yellow-500 text-white" />
          <Button onClick={handleButtonClick} value="4" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="5" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="6" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="-" className="bg-yellow-500 text-white" />
          <Button onClick={handleButtonClick} value="1" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="2" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="3" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="+" className="bg-yellow-500 text-white" />
          <Button onClick={handleCalculate} value="=" className="col-span-2 bg-yellow-500 text-white" />
          <Button onClick={handleButtonClick} value="0" className="bg-gray-300" />
          <Button onClick={handleButtonClick} value="." className="bg-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;