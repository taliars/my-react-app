import './Char.css'

const char = props =>{
    return <div className="CharBox" onClick={props.delete}>
        {props.charBoxContent === " " ? <br/> : props.charBoxContent.toUpperCase()}
    </div>
}
    

export default char;