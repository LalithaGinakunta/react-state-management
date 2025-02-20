import { useState } from "react";

export default function ResetStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Preserving and Resetting State</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
