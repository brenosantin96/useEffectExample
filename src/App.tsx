import { useState, useEffect, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=> {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }


  return (
    <div>
      <input type="text" placeholder='Digite seu nome' value={name} onChange={handleNameChange} />
      <input type="text" placeholder='Digite seu sobrenome' value={lastName} onChange={handleLastNameChange} />

      Nome completo: {fullName}

    </div>
  )
}

export default App
