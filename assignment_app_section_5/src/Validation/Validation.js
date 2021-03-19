const validation = props => {
    const result = props.text.length > 5 
        ? "long enough"
        : "too short";
        
    return <p>Text is {result}</p>
}

export default validation;