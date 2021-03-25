import './Validation.css'

const validation = props => {
    const settings = props.inputLength > 5
        ? { message: "long enough", style: "Valid" }
        : { message: "too short", style: "Invalid" };

    return <p className={"Message " + settings.style}>Text is {settings.message}</p>
}

export default validation;