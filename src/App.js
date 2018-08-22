import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundary/ErrorBoundry';

class App extends Component {
  state = {
    persons: [
      {id: '3232', name: 'Max', age: 29},
      {id: 'ggggg', name: 'Manu', age:23},
      {id: 'dsadsa', name: 'Stephanie', age: 34}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  nameChnagedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  togglePersonsHandler = () =>  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let buttonClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return
              <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChnagedHandler(event, person.id)} />
          })}
        </div>
      );
      buttonClass = classes.Red;
    }

    let assignClasses = [];
    if(this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>hi, I'm React app</h1>
          <p className={assignClasses.join(' ')}>This Works!</p>
          <button
          className={buttonClass} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
