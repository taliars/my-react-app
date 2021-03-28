import React, { Component } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Stas", age: "32", gender: "male", hobby: "To prog" },
      { id: "2", name: "Ulya", age: "24", gender: "female", hobby: "To design" },
      { id: "3", name: "Senya", age: "2", gender: "male", hobby: "To cry" },
      { id: "4", name: "Anya", age: "53", gender: "female", hobby: "To sit with rugrats" },
      { id: "5", name: "Akim", age: "27", gender: "male", hobby: "To be successful" },
      { id: "6", name: "Marina", age: "25", gender: "female", hobby: "To hang around" }
    ],
    description: "This is our family",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    let updatedPersons = [...this.state.persons];
    updatedPersons[personIndex].hobby = event.target.value;
    this.setState({ persons: [...updatedPersons] });
  }

  togglePersonsHandler = () => {
    var doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) =>
        <Person
          name={person.name}
          age={person.age}
          gender={person.gender}
          hobby={person.hobby}
          key={person.id}
          click={this.deletePersonHandler.bind(this, index)}
          change={(event) => this.nameChangedHandler(event, person.id)}>
          {person.hobby}
        </Person>)
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App} >
        <h1>Hello!</h1>
        <h2 className={assignedClasses.join(' ')}>{this.state.description.toUpperCase()}</h2>
        <button
          className={classes.Button}
          onClick={this.togglePersonsHandler}>
          Toggle family
        </button>
        { persons}
      </div>)
  };
}

export default App;
