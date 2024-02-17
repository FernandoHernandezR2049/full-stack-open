import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({ good: 0, neutral: 0, bad: 0 });

  const increaseGood = () => {
    const newCount = {
      ...count,
      good: count.good + 1,
    };
    setCount(newCount);
  };
  const increaseNeutral = () => {
    const newCount = {
      ...count,
      neutral: count.neutral + 1,
    };
    setCount(newCount);
  };
  const increaseBad = () => {
    const newCount = {
      ...count,
      bad: count.bad + 1,
    };
    setCount(newCount);
  };
  function getAverage(good, neutral, bad) {
    return (good * 1 + bad * -1) / (good + neutral + bad);
  }
  function getPositivePercentage(good, neutral, bad) {
    return good / (good + bad + neutral);
  }
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
      <p>all {count.good + count.neutral + count.bad}</p>
      <p>average {getAverage(count.good, count.neutral, count.bad)}</p>
      <p>
        positive {getPositivePercentage(count.good, count.neutral, count.bad)}%
      </p>
    </>
  );
}

export default App;
