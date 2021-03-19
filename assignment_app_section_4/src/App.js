import { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  const [userState, setUserState] = useState({ userName: "boy" });

  const setUseNameHandler = event => setUserState({ userName: event.target.value });

  return (
    <div className="App">
      <UserInput change={setUseNameHandler}/>
      <UserOutput userName={userState.userName} />
    </div>
  );
}

export default App;
