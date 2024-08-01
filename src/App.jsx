import { useCallback } from "react";
import { useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAlllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(isNumberAllowed) str+= '0123456789';
    if(isCharacterAllowed) str += '!@#$%^&*(){}[]';
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);   
      pass = str.charAt(char)   
    }
    setPassword(pass)
  }, [length, isNumberAllowed, isCharacterAllowed,setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white pt-10'>Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500">
      <input type="text" value={password}  className="outline-none w-full py-1 px-3" readOnly/>
      <input type="range"/> <label>Length ({length})</label>
      <input type="checkbox"/> <label>Numbers</label>
      <input type="checkbox"/> <label>Characters</label>
      </div>
    </>
  )
}

export default App
