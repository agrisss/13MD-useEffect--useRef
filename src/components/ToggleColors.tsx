import { useRef } from "react";

const ToggleColors = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  const handleClickForDiv = () => {
    divRef.current.style.backgroundColor =
      divRef.current.style.backgroundColor === "white" ? "gold" : "white";
  };
  return (
    <>
      <button onClick={handleClickForDiv}>Change Color</button>
      <div
        ref={divRef}
        style={{
          backgroundColor: "white",
          height: "100px",
          width: "100px",
        }}></div>
    </>
  );
};

export default ToggleColors;
