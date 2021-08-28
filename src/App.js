import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {ShowWords} from './ShowWords';

let url='https://api.dictionaryapi.dev/api/v2/entries/en/'

 const loadWord=()=>{
  let o = document.getElementById("tekst").value; 
   fetch(`${url}${o}`)
    .then((response) => {
      return response.json();
    })
    .then(w => {
      ReactDOM.render(<ShowWords word={w}/>,document.getElementById("display")
       
      );
    });
}
function App() {
  return (
    <div className="App">
      <input id="tekst"></input>
  <button onClick={loadWord}>Nadji rec</button>
  <div id="display"></div>
      </div> 
    
  );
}

export default App;
