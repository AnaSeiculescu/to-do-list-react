import { useState } from 'react'
import './App.css';
import {InputTask} from './components/InputTask';

function App() {
  const [taskName, setTaskName] = useState('');

  function handlerChange(event) {
    const input = event.target.value;
    setTaskName(input);
  }

  return (
    <div>
      <InputTask value={taskName} onChange={handlerChange}/>
    </div>
  )
}

export default App
