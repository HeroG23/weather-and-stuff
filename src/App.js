import { useEffect } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = `Nitin Misra`;
  });

  useEffect(() => {
    let number = 0;
    number++;
    console.log(number);
  });

  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
