import { useState, useRef } from "react";

const MaximizerAndNameChanger = () => {
  const biggerLetters = useRef<HTMLParagraphElement>(null!);
  const [count, setCount] = useState(100); // Set the initial count value to 100

  const makeBigger = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (biggerLetters.current) {
        biggerLetters.current.style.fontSize = `${newCount}px`;
      }
      return newCount;
    });
  };

  const [, setText] = useState("");

  const ChangerText = (string: string) => {
    setText(string);
    document.title = string;
  };

  return (
    <>
      <button onClick={makeBigger}>+</button>
      <p className="counter" ref={biggerLetters}>
        count: {count}
      </p>
      <form>
        <input
          type="text"
          title="i am here"
          onChange={(e) => ChangerText(e.target.value)}
        />
      </form>
    </>
  );
};

export default MaximizerAndNameChanger;
