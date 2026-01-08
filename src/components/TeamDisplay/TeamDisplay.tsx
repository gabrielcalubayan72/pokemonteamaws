import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';


function TeamDisplay() {
    // fetch all teams from backend (not implemented yet)
    const teams = [
        { name: "Team Rocket", members: ["meowth", "ekans", "koffing"] },
        { name: "Ash's Team", members: ["pikachu", "bulbasaur", "charizard", "squirtle"] }
    ];
    // display all teams
    
    return (
        <div className="display-teams"> 
            
            <div className="card" id="team-card">
                {teams.map((team) => (
                    <div key={team.name} className="team-members">
                        <h3>{team.name}</h3>
                        <div className="member">
                            {team.members.map((member: string) => (
                                <PokemonCard key={member} pokemon={member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TeamDisplay;