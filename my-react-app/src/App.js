import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Stas", age: "32", hobby: "" },
      { name: "Ulya", age: "24", hobby: "" },
      { name: "Senya", age: "2", hobby: "" },
      { name: "Anya", age: "53", hobby: "" },
      { name: "Akim", age: "27", hobby: "" },
      { name: "Marina", age: "25", hobby: "" }
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
    updatedPersons[2].hobby = event.target.value;
    this.setState({ persons: [...updatedPersons] });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <h2>{this.state.description.toUpperCase()}</h2>
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
          His hobby is to tyk-tyk on computer
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          Her hobby is design
          </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          hobby={this.state.persons[2].hobby}
          change={this.changeNameHandler}  >
          {this.state.persons[2].hobby}
        </Person>
      </div>
    )
  };
}

export default App;
