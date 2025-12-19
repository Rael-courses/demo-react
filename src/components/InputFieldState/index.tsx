import { useState } from "react";

export const InputFieldState = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <label htmlFor="input">Input with State</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => console.log("inputValue", inputValue)}>Log</button>
    </div>
  );
};
