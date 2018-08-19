import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age:23},
      {name: 'Stephanie', age: 34}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    this.setState({
      persons: [
      {name: newName, age: 29},
      {name: 'Manu', age:23},
      {name: 'Stephanie', age: 45}
    ]})
  }

  nameChnagedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 29},
      {name:  event.target.value, age:23},
      {name: 'Stephanie', age: 26}
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>hi, I'm reach app</h1>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Vishal!')}
          changed={this.nameChnagedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now?'));
  }
}

export default App;
