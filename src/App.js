import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Stas", age: "32" },
      { name: "Ulya", age: "24" },
      { name: "Senya", age: "2" },
      { name: "Anya", age: "53" },
      { name: "Akim", age: "27" },
      { name: "Marina", age: "25" }
    ],
    description: "This is our family"
  };

  switchNameHandler = () => {
    // DON'T do this state.persons[0].name = "Charles David Jacobs";
    let updatedPersons = [...this.state.persons];
    updatedPersons[0].name = 'Piece of shit';
    this.setState({ persons: [...updatedPersons] })
  }

  changeNameHandler = event => {
    let updatedPersons = [...this.state.persons];
    updatedPersons[1].name = event.target.value;
    this.setState({ persons: [...updatedPersons] });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <p>{this.state.description}</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
          My hobbies are do nothing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.changeNameHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  };
}

export default App;
