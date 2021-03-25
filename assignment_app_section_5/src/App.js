import './App.css';
import Validation from './Validation/Validation';
import CharBox from './CharBox/CharBox';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({ text: "Initial" });

  const inputChangeHandler = event => setUserInput({ text: event.target.value });

  const deleteCharHandler = (index) => {
    var initialText = [...userInput.text];
    initialText.splice(index, 1);
    setUserInput({ text: initialText.join('') });
  }

  const charboxes = userInput.text.split('').map((c, index) =>
    <CharBox delete={() => deleteCharHandler(index)} key={index} content={c} />)

  return (
    <div className="App">
      <Validation inputLength={userInput.text.length} />
      <input
        className="Input"
        type="text"
        onChange={inputChangeHandler}
        value={userInput.text} />
      <div>
        {charboxes}
      </div>
    </div>
  );
}

export default App;
