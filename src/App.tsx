import { useState } from 'react'
import kevanLogo from './assets/kevan.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
      <img src={kevanLogo} className="kevan" alt="Kevan" />
    </div>
      <h1>Compteur de "Du coup de Kevan"</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Du coup: {count}
        </button>
      </div>
      <div className="reset">
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
