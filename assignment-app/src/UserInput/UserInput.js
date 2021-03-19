import './UserInput.css';

const userInput = props =>
    <input
        type="text"
        className="Input"
        onChange={props.change}
        value={props.usernane} />

export default userInput;