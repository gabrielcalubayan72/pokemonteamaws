import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import './TeamCreation.css'


function TeamCreation({names}: {names: string[]}) {
    const [teamName, setTeamName] = useState<string>([]);
    const [members, setMembers] = useState<string[]>([]);

    function addMember(pokemon: string) {
        if (!(names.includes(pokemon))) {
            alert("Pokemon not found!");
            return;
        }
        if (members.length < 6) {
            setMembers([...members, pokemon]);
        } else {
            alert("Team is full! Maximum 6 Pokemon allowed.");
        }
    }

    function removeMember(pokemon: string) {
        setMembers(members.filter(member => member !== pokemon));
    }
    
    async function saveTeam() {
        const requestOptions = {
            method: 'POST',
            body: btoa(JSON.stringify(
                { name: teamName, pokemons: members }
            ))
        };

        const response = await fetch('https://hsw387dosf.execute-api.ap-southeast-2.amazonaws.com/team', requestOptions);
        const data = await response.json();
    }

    return (
        <div className="team-creation"> 
            <input type="text" id="add-pokemon" placeholder="Add Pokemon"/>
            <button onClick={() => {
                addMember((document.getElementById("add-pokemon") as HTMLInputElement)?.value || "")}}>
                    Add to Team
            </button>

            <div className="card" id="team-card">
                {members.map((member: string) => (
                    <div key={member} className="team-member">
                        <PokemonCard key={member} pokemon={member} />
                        <button onClick={() => removeMember(member)}>Remove</button>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Team Name" onInput={e => setTeamName((e.target as HTMLTextAreaElement).value)}/>

            <button onClick={saveTeam}>
                Save this team! 
            </button>

        </div>
    )
}

export default TeamCreation;