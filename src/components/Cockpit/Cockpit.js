import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignClasses = [];
    let btnClass = props.showPersons ? classes.Red : '';

    if(props.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This Works!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;