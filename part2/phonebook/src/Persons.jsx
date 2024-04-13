const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.id}>
          Name:{person.name} Number:{person.number}
        </p>
      ))}
    </>
  );
};
export default Persons;
