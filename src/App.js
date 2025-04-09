import React, { useState } from "react";
import "./App.css";

const cards = [
  { word: "Port", taboo: ["berth", "stop", "load/unload"] },
  { word: "Bridge Room", taboo: ["captain", "rudder", "observe"] },
  { word: "Manoeuvre", taboo: ["move", "change", "course"] },
  { word: "Machinery", taboo: ["machine", "engine", "equipment"] },
  { word: "Crane", taboo: ["Lift", "heavy", "machine"] },
];

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const card = cards[index];

  return (
    <div className="App">
      <h1>Maritime Taboo</h1>
      <div className="card">
        <h2>{card.word}</h2>
        <ul>
          {card.taboo.map((word, idx) => (
            <li key={idx}>{word}</li>
          ))}
        </ul>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;