import React, { useState } from 'react';
import './App.css';

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [output, setOutput] = useState('');

  const handleAddItem = () => {
    const item = prompt('Enter the item:');
    if (item) {
      setGroceryList(prevList => [...prevList, item]);
    }
  };

  const handleRemoveItem = () => {
    const item = prompt('Enter the item to remove:');
    setGroceryList(prevList => prevList.filter(i => i !== item));
  };

  const handleClearList = () => {
    setGroceryList([]);
  };

  const handleFindCheapestLocation = () => {
    setOutput('Cheapest location: Supermarket XYZ');
  };

  const handleFindCoupons = () => {
    setOutput('Coupons: 10% off on fruits, $2 off on milk');
  };

  return (
    <div className="App">
      <div className="panel">
        <h2>Choose an Action</h2>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleRemoveItem}>Remove Item</button>
        <button onClick={handleClearList}>Clear List</button>
        <button onClick={handleFindCheapestLocation}>Find Cheapest Location</button>
      </div>

      <div className="panel">
        <h2>Your Grocery List</h2>
        <ul>
          {groceryList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h2>Output</h2>
        <div>{output}</div>
      </div>
    </div>
  );
}

export default App;
