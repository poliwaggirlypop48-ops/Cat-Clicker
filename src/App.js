import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🐱 Cat Clicker</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Clicks: {count}</p>
    </div>
  );
}
