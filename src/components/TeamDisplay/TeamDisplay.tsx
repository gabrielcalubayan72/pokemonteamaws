import { useEffect, useState } from 'react'

import './TeamDisplay.css'
import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
const URL = 'https://hsw387dosf.execute-api.ap-southeast-2.amazonaws.com';

interface Team {
    id: string,
    name: string,
    pokemons: string[]
}

function TeamDisplay() {
    const [teams, setTeams] = useState<Team[]>([])
    // display all teams
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch(`${URL}/teams`);
                const body = await response.json();
                console.log(body);
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
            {teams && teams.map((team) => (
                <div className="card" id="team-card">
                    <div key={team.id} className="team-members">
                        <h3>{team.name}</h3>
                        <div className="member">
                            {team.pokemons?.map((member: string) => (
                                <PokemonCard key={member} pokemon={member} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamDisplay;