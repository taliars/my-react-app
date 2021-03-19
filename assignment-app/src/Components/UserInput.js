import React from 'react';
import '../App.css';

const UserInput = props =>
    <input
        className="Input"
        onChange={props.change}
        value={props.usernane} />

export default UserInput;