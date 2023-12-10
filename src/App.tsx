import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdButton from "./components/ThirdButton";
import FourthCounter from "./components/FourthCounter";
import ToggleColors from "./components/ToggleColors";
import FifthDropDown from "./components/FifthDropDown";
import CountBtnReadInput from "./components/CountBtnReadInput";
import MaximizerAndNameChanger from "./components/MaximizerAndNameChanger";
import Cloner from "./components/cloner";
import Relocator from "./components/Relocator";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <FirstForm />
      </div>

      <div className="wrapper">
        <SecondForm />
      </div>

      <div className="wrapper">
        <ThirdButton />
      </div>

      <div className="wrapper">
        <FourthCounter />
      </div>
      <div className="wrapper">
        <FifthDropDown />
      </div>

      <div className="wrapper">
        <MaximizerAndNameChanger />
      </div>

      <div className="wrapper">
        <CountBtnReadInput />
      </div>

      <div className="wrapper">
        <ToggleColors />
      </div>

      <div className="wrapper">
        <Cloner />
      </div>

      <div className="wrapper">
        <Relocator />
      </div>
    </div>
  );
}

export default App;
