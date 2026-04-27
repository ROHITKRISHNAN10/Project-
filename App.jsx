import { useState } from "react";
import "./App.css";

function App() {
  const [investments, setInvestments] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const addInvestment = () => {
    if (!name || !amount || !type) return;

    const newInvestment = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      type,
    };

    setInvestments([...investments, newInvestment]);
    setName("");
    setAmount("");
    setType("");
  };

  const total = investments.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="container">
      <h1>Investment Portfolio Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Investment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type (Stock, Crypto, etc.)"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button onClick={addInvestment}>Add</button>
      </div>

      <h2>Total Investment: ₹{total}</h2>

      <ul>
        {investments.map((inv) => (
          <li key={inv.id}>
            {inv.name} - ₹{inv.amount} ({inv.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;