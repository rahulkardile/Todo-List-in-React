import React, { useState } from "react";

function App() {

  const [inputText, newInputText] = useState("");
  const [items, setNewItems] = useState([]);

  function manageInput(event) {
    let newValue = event.target.value;
    newInputText(newValue);
  }

  function addItem() {
    setNewItems(prevalue => {
      return [...prevalue, inputText]
    })
    newInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={manageInput} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  )
}
export default App;
