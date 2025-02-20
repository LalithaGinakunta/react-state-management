import { useState } from "react";

function Child({ text, setText }) {
  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
}

export default function SharedStateExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Sharing State Between Components</h2>
      <Child text={text} setText={setText} />
      <p>You typed: {text}</p>
    </div>
  );
}
