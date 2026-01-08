import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import './TeamDisplay.css'

function TeamDisplay({ team }: { team?: { name: string; members: string[] } }) {
    
    return (
        <div className="display-teams"> 
            
            <div className="card" id="team-card">
                {team && (
                    <div key={team.name} className="team-members">
                        <h3>{team.name}</h3>
                        <div className="member">
                            {team.members.map((member: string) => (
                                <PokemonCard key={member} pokemon={member} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default TeamDisplay;