import Bar from "./Components/Bar"
import { useState } from "react"

function App() {
 
 const[open, setOpen]=useState(true)
 const toggleMenu = () => setOpen(prev => !prev);

  return (
    <>
      <Bar toggleMenu={toggleMenu} open={open} /> 
    </>
  )
}

export default App
