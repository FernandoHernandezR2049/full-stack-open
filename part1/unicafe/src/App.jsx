import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ count }) => {
  function getAverage(good, neutral, bad) {
    return (good * 1 + bad * -1) / (good + neutral + bad);
  }
  function getPositivePercentage(good, neutral, bad) {
    return good / (good + bad + neutral);
  }
  let statisticsContent = <p>No feedback given</p>;
  if (count.good + count.neutral + count.bad !== 0) {
    statisticsContent = (
      <table>
        <tbody>
          <StatisticLine text="good" value={count.good} />
          <StatisticLine text="neutral" value={count.neutral} />
          <StatisticLine text="bad" value={count.bad} />
          <StatisticLine
            text="all"
            value={count.good + count.neutral + count.bad}
          />
          <StatisticLine
            text="average"
            value={getAverage(count.good, count.neutral, count.bad)}
          />
          <StatisticLine
            text="positive"
            value={getPositivePercentage(count.good, count.neutral, count.bad)}
          />
        </tbody>
      </table>
    );
  }
  return (
    <>
      <h2>Statistics</h2>
      {statisticsContent}
    </>
  );
};
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
  return (
    <>
      <h2>Give feedback</h2>
      <Button handleClick={increaseGood} text={"positive"} />
      <Button handleClick={increaseNeutral} text={"neutral"} />
      <Button handleClick={increaseBad} text={"bad"} />
      <Statistics count={count} />
    </>
  );
}

export default App;
