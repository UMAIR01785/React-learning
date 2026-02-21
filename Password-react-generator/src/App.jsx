import { useState ,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(7)
  const [numberAllow,setNumberAllowed]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")
  let passwordref=useRef(null)

const copypassword=useCallback(()=>{
  passwordref.current.select();
  window.navigator.clipboard.writeText(password)
  
},[password])

  const passwordgenertor= useCallback(
    ()=>{
      let pass=""
      let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
      if(numberAllow) str+="1234567890"
      if(charAllow) str+='!@#$%^&*()_'

      for (let i = 1; i <= length; i++){
         let passgen=Math.floor(Math.random()*str.length)
          pass += str.charAt(passgen)
      }
      setPassword(pass)

    },[length,numberAllow,charAllow,setPassword]
  )

  useEffect(() => {
    passwordgenertor()
  },[length,charAllow,numberAllow,passwordgenertor])


  return (
    <>
    <h1 className="text-center text-4xl text-white">Password </h1>
    <div className='flex justify-center flex-col py-5'>
    <div className="flex justify-center flex-wrap py-5">
      <input type="text"
      placeholder='Password'
      value={password}
      readOnly
      ref={passwordref}
      className=' px-4 py-2 border border-gray-300 rounded-xl
         focus:outline-none focus:ring-2 focus:ring-blue-500
         focus:border-blue-500 transition duration-20 bg-white px-3 mx-3' />
         
      <button className='px-6 py-3 bg-blue-600 text-white font-semibold
         rounded-xl shadow-md
         hover:bg-blue-700 hover:shadow-lg
         active:scale-95
         transition duration-200' onClick={copypassword}>Copy</button>
    </div>
   <div className="flex items-center gap-4 justify-center">
  <input
    type="range"
    min="3"
    max="20"
    id='length'
    onChange={(e)=>setLength(e.target.value)}
    value={length}
    className="flex-1 max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
  />

  <label className="text-white font-semibold" htmlFor='length'>
    Length:{length}

  </label>
</div>
 <div className="flex items-center gap-4 justify-center">
  <div className="flex items-center gap-2">
    <input 
      type="checkbox"
      id="numberAllow"
      checked={numberAllow}
      onChange={(e) => setNumberAllowed(e.target.checked)}
      className="w-4 h-4 cursor-pointer"
    />
    <label htmlFor="numberAllow" className="text-white font-semibold cursor-pointer">
      Numbers
    </label>
  </div>
  
  <div className="flex items-center gap-2">
    <input 
      type="checkbox"
      id="charAllow"
      checked={charAllow}
      onChange={(e) => setCharAllow(e.target.checked)}
      className="w-4 h-4 cursor-pointer"
    />
    <label htmlFor="charAllow" className="text-white font-semibold cursor-pointer">
      Special Characters
    </label>
  </div>
 </div>

    </div>
    </>
  )
}

export default App
