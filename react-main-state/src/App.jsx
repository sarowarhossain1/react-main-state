import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInfo from './Components/FormInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
     <div>
      <FormInfo></FormInfo>
     </div>
    </>
  )
}

export default App
