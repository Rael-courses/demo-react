import { useEffect, useRef } from "react";

export const InputFieldRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "Hello World";
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <label htmlFor="input">Input with Ref</label>
      <input type="text" id="input" ref={inputRef} />
      <button onClick={() => console.log("inputRef", inputRef.current?.value)}>
        Log
      </button>
    </div>
  );
};
