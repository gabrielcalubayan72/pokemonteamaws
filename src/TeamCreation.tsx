import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ditto from './assets/ditto.jpeg'
import './App.css'


function TeamCreation() {
    return (
        <div className="team-creation"> 
            <input type="text" placeholder="Team Name"/>
            <div className="card" id="team-card">
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

export default TeamCreation;