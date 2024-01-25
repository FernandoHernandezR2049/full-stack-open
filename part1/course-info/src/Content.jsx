const Content = (props) => {
  return (
    <div>
      <p>
        {props.data[0].part} {props.data[0].exercises}
      </p>
      <p>
        {props.data[1].part} {props.data[1].exercises}
      </p>
      <p>
        {props.data[2].part} {props.data[2].exercises}
      </p>
    </div>
  );
};

export default Content;
