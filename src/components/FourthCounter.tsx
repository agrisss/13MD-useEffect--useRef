import { useState } from "react";

const FourthCounter = () => {
  const [count, setCount] = useState(0);
  const Counter = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button type="button" onClick={Counter}>
        Count me: {count}
      </button>
      <div>
        <p>{count * 2}</p>
      </div>
    </>
  );
};
export default FourthCounter;
