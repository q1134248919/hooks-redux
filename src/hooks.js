import React, { useState, useEffect } from "react";

export function Hooks() {
  const [num, setNum] = useState[0];
  const [number, setNumber] = useState[0];

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${num} times`;
  })

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Click me</button>
      <button onClick={() => setNumber(number + 1)}>Click me too</button>
    </div>
  );
}
