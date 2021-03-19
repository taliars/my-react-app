import React from 'react';
import './Person.css';
import '../App.css';

const person = props => {
    const prefix = props.gender === "female" ? "Her" : "His"
    let hobby = props.children !== null
        ? `${prefix} hobby is ${props.children.toLowerCase()}`
        : "no hobbies we know";

    return <div className="Person">
        <p><strong>{props.name}</strong> is {props.age} years old!</p>
        <p>{hobby}</p>
        <input onChange={props.change} value={props.hobby} style={{margin: "20px"}}/>
        <button className="ButtonStyle" onClick={props.click}>Remove</button>
    </div>

}

export default person;