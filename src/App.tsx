import { useState, useEffect } from 'react'
import ditto from './assets/ditto.jpeg'
import './App.css'
import TeamCreation from './components/TeamCreation/TeamCreation'
import TeamDisplay from './components/TeamDisplay/TeamDisplay'

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [names, setNames] = useState([]);

  const url = new URL('https://pokeapi.co/api/v2/pokemon/');
  const params = { limit: "1500", offset: "0" }
  url.search = new URLSearchParams(params).toString();

  // TODO: Figure out why it still calls the fetchNames function twice.
  // This is caused by React's strict mode which renders components twice,
  // but the use of useEffect with an empty dependency array should already
  // fix this ... so not sure why that's not working.
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const listOfNames = await 
          fetch(url)
            .then((res) => res.json())
            .then((data) => (data.results.map((pokemon: Pokemon) => pokemon.name)))
            .catch((err) => console.error("Error:", err));
        setNames(listOfNames.sort());
      } catch (error) {
        console.log(error);
      }
    };
    fetchNames();
  }, []);
  // console.log(names);

  return (
    <>

    <img className='background-image' src={'src/assets/Box_City_FRLG.png'} alt="Ditto logo" />

    
    <div>
      <div>
          <img src={ditto} className="logo" alt="Ditto logo" />
      </div>

      <h1 className= 'dittosark' >Ditto's Ark</h1>

      <p>Create and Save your Pokémon Teams! View all the teams made by other users below...</p>
      
      <TeamCreation names={names} />
        
      <div className="team-list">
        <h2>Saved Teams:</h2>
        
        <TeamDisplay />

      </div>
    </div>
      
    </>
  )
}

export default App
