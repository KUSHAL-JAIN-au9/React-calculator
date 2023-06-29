import "./App.css";
import { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
// import staticData from "./data/data";
import Btn from "./components/Btn";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  //performs concatinate the numbers
  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  //performs calculations on entire expression including numbers and operators
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
      if (preState === "") alert("need oprand to do equal operation!!");
    }
    console.log("prestate", typeof preState);
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "%":
        cal = String(parseFloat(preState) % parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  // toggle between negative and non negetive numbers
  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  //resets the fileld
  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  const staticData = [
    {
      id: 1,
      text: "AC",
      class: "btn light-gray",
      onClick: reset,
    },
    {
      id: 2,
      text: "%",
      class: "btn light-gray",
      onClick: operatorType,
    },
    {
      id: 3,
      text: "+/-",
      class: "btn light-gray",
      onClick: minusPlus,
    },
    {
      id: 4,
      text: "/",
      class: "btn orange",
      onClick: operatorType,
    },
    {
      id: 5,
      text: "7",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 6,
      text: "8",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 7,
      text: "9",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 8,
      text: "X",
      class: "btn orange",
      onClick: operatorType,
    },
    {
      id: 9,
      text: "4",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 10,
      text: "5",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 11,
      text: "6",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 12,
      text: "+",
      class: "btn orange",
      onClick: operatorType,
    },
    {
      id: 13,
      text: "1",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 14,
      text: "2",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 15,
      text: "3",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 16,
      text: "-",
      class: "btn orange",
      onClick: operatorType,
    },
    {
      id: 17,
      text: "0",
      class: "btn  zero",
      onClick: inputNum,
    },
    {
      id: 18,
      text: ".",
      class: "btn",
      onClick: inputNum,
    },
    {
      id: 19,
      text: "=",
      class: "btn",
      onClick: equals,
    },
  ];
  return (
    <>
      <h1>React Calculator</h1>
      {/* <hr /> */}
      <div className="container">
        <div className="wrapper">
          {/* {console.log(input, preState)} */}
          <div className="screen">
            {input !== "" || input === "0" ? (
              <NumericFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              <NumericFormat
                value={preState}
                displayType={"text"}
                thousandSeparator={true}
              />
            )}
          </div>
          {staticData.map((item) => (
            <Btn
              key={item.id}
              style={item.class}
              handleCLick={item.onClick}
              innerText={item.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
