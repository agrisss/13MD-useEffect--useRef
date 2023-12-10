import React, { useEffect } from "react";

const ThirdButton = () => {
  const [disable, setDisable] = React.useState(true);
  const enableButton = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const id = setInterval(() => {
        setDisable(false);
      }, 5000);
      return () => {
        clearInterval(id);
      };
    }, []);
  };
  enableButton();
  return (
    <>
      <button disabled={disable}>Click me!</button>
    </>
  );
};
export default ThirdButton;
