import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({ good: 0, neutral: 0, bad: 0 });

  const increaseGood = () => {
    setCount({
      ...count,
      good: count.good + 1,
    });
  };
  const increaseNeutral = () => {
    setCount({
      ...count,
      neutral: count.neutral + 1,
    });
  };
  const increaseBad = () => {
    setCount({
      ...count,
      bad: count.bad + 1,
    });
  };
  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
      <h2>Statistics</h2>
      <p>good {count.good}</p>
      <p>neutral {count.neutral}</p>
      <p>bad {count.bad}</p>
    </>
  );
}

export default App;
