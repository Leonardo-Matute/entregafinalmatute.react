import { useState } from "react";
import "./App.css";
// import App from './App';
import LabelComponent from "./components/LabelComponent";
import ButtonComponent from "./components/ButtonComponent";
import NavBar from "./components/NavBar";

const AppCounter = () => {
  const [count, setCount] = useState(0);

  const handleSumar = () => {
    setCount(count + 1);
  };

  const handleRestar = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <NavBar />


      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <button onClick={handleRestar}>-</button>
        <span>{count}</span>
        <button onClick={handleSumar}>+</button>
        <ButtonComponent />
        <LabelComponent />
      </div> */}
    </div>
  );
};

export default AppCounter;