import { useState } from "react";

export default function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Reacting to Input with State</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You typed: {text}</p>
    </div>
  );
}
