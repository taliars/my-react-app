import { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

function App() {
  const [state, setState] = useState({ username: "Senya" });

  const setUseNameHandler = event => setState({ username: event.target.value });

  return (
    <div className="App">
      <UserInput change={setUseNameHandler}/>
      <UserOutput username={state.username} />
    </div>
  );
}

export default App;
