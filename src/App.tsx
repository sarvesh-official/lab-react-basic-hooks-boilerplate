
import { createContext, useState } from 'react'
import './App.css'
import UseContext from './components/UseContext'

export const ToggleTheme = createContext(false)


function App() {
  const [state, setState] = useState(true)
  
 
  const handleToogle = () => {
      setState(!state)
  }

  return (
    <>
      <ToggleTheme.Provider value = {state}>
        <button onClick={handleToogle}>Toggle</button>
        <UseContext/>
      </ToggleTheme.Provider>
    </>
  )
}

export default App
