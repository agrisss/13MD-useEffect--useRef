import { useState, useEffect, useRef } from "react";

const CounterAndReaderForm = () => {
  const [count, setCount] = useState(0);
  const Counter = () => {
    setCount(count + 1);
    console.log("counter changed");
  };
  const [text, setText] = useState("");
  const ChangerText = (string: string) => {
    setText(string);
    console.log("input changed");
  };

  // Ref to track whether it's the first render
  const firstRender = useRef(true);

  // useEffect to log "first render" on the very first render
  useEffect(() => {
    if (firstRender.current) {
      console.log("first render");
      firstRender.current = false;
    }
  }, []);

  return (
    <>
      <button type="button" onClick={Counter}>
        +
      </button>
      <p className="counter">Count me: {count}</p>
      <form>
        <input
          type="text"
          title="i am here"
          onChange={(e) => ChangerText(e.target.value)}
        />
        <p>{text}</p>
      </form>
    </>
  );
};

export default CounterAndReaderForm;
