const Total = (props) => {
  const getTotalExercises = (parts) => {
    return parts.reduce((total, part) => total + part.exercises, 0);
  };
  return <p>Number of exercises {getTotalExercises(props.parts)}</p>;
};

export default Total;
