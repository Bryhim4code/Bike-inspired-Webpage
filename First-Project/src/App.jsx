import { useState } from "react";
import reactLogo from "./assets/react.svg";
import devsignLogo from "./assets/devsign.png";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContents";
import Section from "./Components/Section";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <MainContent />
      <Section />
    </div>
  );
}

export default App;
