import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxilliary';

const cockpit = (props) => {
    const assignClasses = [];
    let btnClass = props.showPersons ? [classes.Button, classes.Red].join(' ') : classes.Button;

    if(props.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This Works!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Login </button>
       </Aux>
    );
};

export default cockpit;