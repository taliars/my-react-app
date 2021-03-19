import React from 'react';

const style = {
    padding: '16px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    width: '40%',
    margin: '16px auto'
}

const UserOutput = props => 
    <div style={style}>
        <p>The {props.username} boy stood on the burning deck<br/>Whence all but him had fled;</p>
        <p>The flame that l it the battle's wreck<br/>Shone round him o'er the dead.</p>
    </div>


export default UserOutput;