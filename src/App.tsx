import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ditto from './assets/ditto.jpeg'
import './App.css'
import TeamCreation from './TeamCreation'
import TeamDisplay from './TeamDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={ditto} className="logo" alt="Ditto logo" />
      </div>

      <h1>Ditto's Ark</h1>

      <p>Create and Save your Pokemon Teams! View all the teams made by other users below...</p>
      
      <TeamCreation />

      
      <button onClick={() => alert('Team saved!')}>
        Save this team! 
      </button>
        
      <div className="team-list">
        <h2>Saved Teams:</h2>
        
        <TeamDisplay />

        <TeamDisplay />

      </div>
      
    </>
  )
}

export default App
