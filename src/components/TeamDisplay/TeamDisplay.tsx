import { useEffect, useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
const URL = 'https://hsw387dosf.execute-api.ap-southeast-2.amazonaws.com';

function TeamDisplay() {
    // fetch all teams from backend (not implemented yet)
    const [teams, setTeams] = useState([])
    // display all teams
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`${URL}/teams`);
                console.log(response);
                const body = await response.json();
                setTeams(body || []);
            } catch (error) {
                setTeams([]);
                console.log(error);
            }
        };
        fetchTeams();
    }, [])
    
    return (
        <div className="display-teams"> 
            
            <div className="card" id="team-card">
                {teams.map((team) => (
                    <div key={team.name} className="team-members">
                        <h3>{team.name}</h3>
                        <div className="member">
                            {team.pokemons.map((member: string) => (
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