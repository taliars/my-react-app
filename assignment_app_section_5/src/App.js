import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import { useState } from 'react';

function App() {
  const [textState, setTextState] = useState({ text: "Initial" });

  const textChangeHandler = event => setTextState({ text: event.target.value });

  const deleteCharHandler = (index) => {
    var initialText = [...textState.text];
    initialText.splice(index, 1);   
    setTextState({ text: initialText.join('')});
  }

  const charboxes = textState.text.split('').map((c, index) => 
    <Char delete={() => deleteCharHandler(index)} charBoxContent={c}/>)

  return (
    <div className="App">
      <Validation text={textState.text} />
      <input onChange={textChangeHandler} value={textState.text} />
      <div>
        { charboxes }
      </div>
    </div>
  );
}

export default App;
