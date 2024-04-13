import { useState } from "react";
import "./App.css";
import Persons from "./Persons";
import Form from "./Form";
import Filter from "./Filter";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleNameFilter = (event) => {
    console.log(event.target.value);
    setNameFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    if (persons.filter((person) => newName === person.name).length === 1) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  function filterPersons(persons) {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilter={handleNameFilter} />
      <h2>Add new person</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons(persons)} />
    </div>
  );
}

export default App;
