import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: '3232', name: 'Max', age: 29},
        {id: 'ggggg', name: 'Manu', age:23},
        {id: 'dsadsa', name: 'Stephanie', age: 34}
      ],
      showPersons: false,
      toggleClickedCounter: 0
    };

    console.log('[App.js inside constructor]', props);
  }

  componentWillMount() {
    console.log(' App.js Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[App.js: inside shouldComponentUpdate()]', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //            nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps) {
      console.log('[App.js: inside componentWillUpdate()]', nextProps); 
  }

  componentDidUpdate() {  
    console.log('[App.js: inside componentDidUpdate()]'); 
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      }
    });
  }

  render() {
    console.log('App.js Inside render()');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChnagedHandler}/>;
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, classes.App);
