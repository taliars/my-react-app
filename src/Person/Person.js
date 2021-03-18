import React from 'react';

const person = props =>
    <div>
        <p><strong>{props.name}</strong> is {props.age} years old!</p>
        <p1>{props.children}</p1>
    </div>

export default person;