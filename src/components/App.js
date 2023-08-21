import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [option, setOption] = useState("");

  
  return (
    <div>
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child1">
            <h3>Child Component 1</h3>
            <button onClick={ () => setOption("Option 1")}>Option 1</button>
          </div>
          <div className="child2">
            <h3>Child Component 2</h3>
            <button onClick={() => setOption("Option 2")}>Option 2</button>
          </div>
          <p>Selected Option: {option}</p>
        </div>
    </div>
  )
}

export default App
