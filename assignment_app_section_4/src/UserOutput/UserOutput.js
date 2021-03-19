const inputStyle = {
    padding: '16px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    width: '40%',
    margin: '16px auto'
}

const userOutput = props => 
    <div style={inputStyle}>
        <p>The {props.userName} stood on the burning deck<br/>Whence all but him had fled;</p>
        <p>The flame that l it the battle's wreck<br/>Shone round him o'er the dead.</p>
    </div>


export default userOutput;