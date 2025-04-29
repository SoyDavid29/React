import Bar from "./Bar"
import Menu from "./Menu"
import { useState } from "react"

function App() {
 
 const[open, setOpen]=useState(true)
 const toggleMenu = () => setOpen(prev => !prev);

  return (
    <>
      <Bar toggleMenu={toggleMenu}/>
      <Menu open={open}/>
    </>
  )
}

export default App
