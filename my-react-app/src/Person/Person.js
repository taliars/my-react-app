import React from 'react';
import './Person.css';

const person = props =>
    <div className="Person">
        <p><strong>{props.name}</strong> is {props.age} years old!</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.hobby} />
    </div>

export default person;