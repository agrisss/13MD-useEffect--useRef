import React, { useState, useRef, FormEvent } from "react";

export const SecondForm = () => {
  const [secondInput, setSecondInput] = useState("");
  const [secondInputArray, setSecondInputArray] = React.useState<Array<string>>(
    []
  );
  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSecondInputArray([...secondInputArray, secondInput]);
    setSecondInput("");
  };
  return (
    <>
      <div className="task-wrapper__form">
        <form onSubmit={handleSubmit}>
          <input
            title="second input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSecondInput(e.target.value)
            }
            value={secondInput}
            ref={inputEl}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="task-wrapper__button">
        <p className="submitted-value">{secondInputArray}</p>
      </div>
    </>
  );
};
export default SecondForm;
