import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js inside constructor]', props);
      }
    
    componentWillMount() {
        console.log('Person.js Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('Person.js inside componentDidMount()');console.log('Person.js inside componentDidMount()');
    }

    render() {
        console.log('Person.js inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}  years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);