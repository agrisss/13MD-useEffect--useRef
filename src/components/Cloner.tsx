import { useState, useRef } from "react";

const Cloner = () => {
  const [clones, setClones] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const originalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isButtonDisabled) {
      return; // Ignore clicks when button is disabled
    }

    const original = originalRef.current;
    if (!original) return;

    const clone = original.cloneNode(true) as HTMLDivElement;
    setClones(clones + 1);
    clone.setAttribute("id", `clone-${clones}`);

    original.after(clone);

    // Disable the button for a short duration to prevent spamming
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        Clone
      </button>
      <div
        ref={originalRef}
        style={{ backgroundColor: "gold", height: "100px", width: "100px" }}>
        ☯👐☯
      </div>
    </>
  );
};

export default Cloner;
