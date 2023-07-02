import './App.css';
import React from 'react';
import {evaluate} from 'mathjs';
// math

function App() {

  const btnArr= [
    {
      id: "divide",
      value: " / ",
      type: "operator"
    },
    {
      id: "multiply",
      value: " * ",
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
      value: " - ",
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
      value: " + ",
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
      value: " = ",
      type: ""
    },
    {
      id: "decimal",
      value: ".",
      type: ""
    },
    {
      id: "zero",
      value: "0",
      type: "num"
    },
  ]

  const[calculation, setCalculation] = React.useState("")
  const[output, setOutput] = React.useState("0")

  const btnValues = btnArr.map((item, i) => {
    return (
      <button key={i} className={item.type} id={item.id} value={item.value} onClick={handleClick}>{item.value}</button>
    )
  })

  function handleClick(event) {
    const btnClicked = event.target
  
    if(btnClicked.className !== "operator") {
      if(output == "0" || isNaN(output)) {
        setOutput(btnClicked.value)
      } else if(btnClicked.id !== "equals" && btnClicked.id !== "decimal") {
        setOutput(preVal => preVal + btnClicked.value)
      }
  
      
      if(btnClicked.id === "decimal") {
        if(!output.includes(".")) {
          setOutput(preVal => preVal + btnClicked.value)
          // setCalculation(preCalc => preCalc + btnClicked.value)
        }
  
      } 
    
      if(btnClicked.id === "equals") {
      
        let equals = evaluate(calculation)
        setOutput(equals)
        setCalculation(preCalc => preCalc + btnClicked.value + equals)
  
      } else {
        setCalculation(preCalc => preCalc + btnClicked.value)
      }
     
    } else if(btnClicked.className === "operator"){

      if(calculation.indexOf("=") !== -1) {
        setCalculation(preCalc => preCalc.slice(calculation.indexOf("=") + 1))
      }

      setOutput(btnClicked.value)
      setCalculation(preCalc => preCalc + btnClicked.value)

      // to fix!!!
      if(
        calculation[calculation.length - 2] === "+" || 
        calculation[calculation.length - 2] === "-")  {
          let len = calculation.length - 2
          let newCalc = calculation.substring(0, len) + calculation.substring(len + 1,)
  
          // console.log(newCalc );
          setCalculation(newCalc + btnClicked.value)
        }



    }
    


  }


  function clearScreen() {
    setCalculation("")
    setOutput("0")
  }

  // React.useEffect(() => {
  //   console.log(calculation);
  //   console.log("pos: " + calculation[calculation.length - 5]);
  // }, [calculation]);

  return (
    <div className="App">
      <div className="calculation">{calculation}</div>
      <div id="display">{output}</div>
      <button id="clear" value="AC" onClick={clearScreen}>AC</button>

      {btnValues}
 
 
    </div>
  );
}

export default App;
