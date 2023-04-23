import { useState } from 'react';
import './App.css';

function App() {

	const[color, setColor]=useState('yellow')


  return (
    <div className="App">
      <input style={{backgroundColor:color}} type="text" onChange={(el)=>{setColor(el.target.value)}} />
    </div>
  );
}

export default App;
