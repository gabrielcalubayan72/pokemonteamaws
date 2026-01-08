import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ditto from './assets/ditto.jpeg'
import './App.css'


function TeamDisplay() {
    return (
        <div className="team-display"> 
          <h3>Team 1</h3>
          
            <div className="card" id="card">
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                <div className="content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
                    className="logo ditto" alt="Ditto logo" />
                    <span>Ditto</span>
                </div>
                </div>
            </div>
    )
}

export default TeamDisplay;