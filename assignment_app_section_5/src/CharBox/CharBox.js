import './Char.css'

const char = props => {
    return <div className="CharBox" onClick={props.delete}>
        {props.content === " " ? <br /> : props.content.toUpperCase()}
    </div>
}


export default char;