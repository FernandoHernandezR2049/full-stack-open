import Course from "./Course";

const Courses = (props) => {
  return (
    <>
      {props.courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default Courses;
