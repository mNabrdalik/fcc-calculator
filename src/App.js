import './App.css';
import React from 'react';

function App() {

  const btnArr= [
    {
      id: "divide",
      value: "/",
      type: "operator"
    },
    {
      id: "multiply",
      value: "x",
      type: "operator"
    },
    {
      id: "seven",
      value: "7",
      type: "num"
    },
    {
      id: "eight",
      value: "8",
      type: "num"
    },
    {
      id: "nine",
      value: "9",
      type: "num"
    },
    {
      id: "subtract",
      value: "-",
      type: "operator"
    },
    {
      id: "four",
      value: "4",
      type: "num"
    },
    {
      id: "five",
      type: "num",
      value: "5"
    },
    {
      id: "six",
      value: "6",
      type: "num"
    },
    {
      id: "add",
      value: "+",
      type: "operator"
    },
    {
      id: "one",
      value: "1",
      type: "num"
    },
    {
      id: "two",
      value: "2",
      type: "num"
    },
    {
      id: "three",
      value: "3",
      type: "num"
    },
    {
      id: "equals",
      value: "=",
      type: "operator"
    },
    {
      id: "decimal",
      value: ".",
      type: "operator"
    },
    {
      id: "zero",
      value: "0",
      type: "num"
    },
  ]

  const[history, setHistory] = React.useState("")
  const[output, setOutput] = React.useState("0")

  const btnValues = btnArr.map((item, i) => {
    return (
      <button key={i} className={item.type} id={item.id} value={item.value} onClick={handleClick}>{item.value}</button>
    )
  })

  function handleClick(event) {
    const btnClicked = event.target
    console.log(btnClicked.className)
    if(btnClicked.className === "num") {
      if(output == "0") {
        setOutput(btnClicked.value)
      } else {
        setOutput(preVal => preVal + btnClicked.value);
      }
    }
  
  }

  function clearScreen() {
    setHistory("")
    setOutput(0)
  }

  return (
    <div className="App">
      <div className="history">{history}</div>
      <div id="display">{output}</div>
      <button id="clear" value="AC" onClick={clearScreen}>AC</button>

      {btnValues}
 
 
    </div>
  );
}

export default App;
