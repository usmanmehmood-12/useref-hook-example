import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const errRef = useRef()

  function handleInputChange(e) {
    errRef.current.textContent = ""
    setName(e.target.value)
  }
  function handleClick() {
    if (inputRef.current.value !== '') {
      setName(inputRef.current.value)
    }
    else if (inputRef.current.value === '') {
      errRef.current.textContent = 'Please Enter Value'
    }
  }
  return (
    <div className="App">
      <h1> UseRef Hook Example</h1>
      <input style={{
        marginTop: "5%",
      }} ref={inputRef} value={name} onChange={handleInputChange} />
      <div> My name is {name}</div>
      <div ref={errRef} style={{
        color: "#f44336",
        fontSize: "0.75rem",
        marginTop: "3px",
      }}
      ></div>
      <button onClick={handleClick}>Add Name</button>

    </div>
  );
}

export default App;
