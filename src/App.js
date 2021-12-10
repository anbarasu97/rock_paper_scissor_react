import { useState, useEffect } from "react";
import "./App.css";
import {
  FaRegHandScissors,
  FaRegHandRock,
  FaRegHandPaper,
} from "react-icons/fa";

import Header from "./Components/Header";
import ScoreBoard from "./Components/ScoreBoard";

const choices = ["r", "p", "s"];

function App() {
  // eslint-disable-next-line
  const [userCount, setuserCount] = useState(0);
  // eslint-disable-next-line
  const [compCount, setcompCount] = useState(0);
  // eslint-disable-next-line
  const [userChoice, setuserChoice] = useState("");
  // eslint-disable-next-line
  const [compChoice, setcompChoice] = useState("");
  const [result, setresult] = useState("Let's Start");
  const [refvar, setrefvar] = useState(false);
  const [refCount, setRefCount] = useState(true);

  const calCount = () => {
    console.log("Cal count is triggered");
    if (result === "You Win 👍") {
      console.log("Win is triggered");
      setuserCount(userCount + 1);
    }
    if (result === "You Lose 👎") {
      console.log("Loss is triggered");
      setcompCount(compCount + 1);
    }
  };

  const computeResult = () => {
    switch (userChoice + compChoice) {
      case "rs":
      case "pr":
      case "sp":
        console.log(userChoice + compChoice);
        setresult("You Win 👍");
        setRefCount(!refCount);
        break;
      case "rp":
      case "ps":
      case "sr":
        console.log(userChoice + compChoice);
        setresult("You Lose 👎");
        setRefCount(!refCount);
        break;
      case "rr":
      case "pp":
      case "ss":
        console.log(userChoice + compChoice);
        setresult("It's a Draw 🤝");
        break;
      default:
        setresult("Let's start");
        break;
    }
  };

  const setChoices = (choice) => {
    setuserChoice(choice);
    setcompChoice(choices[Math.floor(Math.random() * 3)]);
    setrefvar(!refvar);
  };

  const wordConvert = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    return "";
  };

  const resetCount = () => {
    setuserCount(0);
    setcompCount(0);
  }

  //useEffect for changing the result
  useEffect(() => {
    computeResult();
    // eslint-disable-next-line
  }, [refvar]);

  useEffect(() => {
    calCount();
    // eslint-disable-next-line
  }, [refCount]);

  return (
    <>
      <Header />
      <ScoreBoard userCount={userCount} compCount={compCount} />
      <div className="result">
        <p>{result}</p>
      </div>

      <div className="choices">
        <div onClick={() => setChoices("r")} className="choice" id="r">
          <FaRegHandRock />
        </div>
        <div onClick={() => setChoices("p")} className="choice" id="p">
          <FaRegHandPaper />
        </div>
        <div onClick={() => setChoices("s")} className="choice" id="s">
          <FaRegHandScissors />
        </div>
      </div>
      <p className="action-message">Make your move</p>
      <p className="action-message">Your Choice: {wordConvert(userChoice)}</p>
      <p className="action-message">
        Computer's Choice: {wordConvert(compChoice)}
      </p>
      <div className="start">
        <button onClick={()=> resetCount()}>Start Over</button>
      </div>
    </>
  );
}

export default App;
