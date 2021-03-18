import React from 'react';

const person = props =>
    <div>
        <p><strong>{props.name}</strong> is {props.age} years old!</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name} />
    </div>

export default person;