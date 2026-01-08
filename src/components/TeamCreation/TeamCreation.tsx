import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import './TeamCreation.css'


function TeamCreation({names}: {names: string[]}) {
    const [teamName, setTeamName] = useState([]);
    const [members, setMembers] = useState([]);

    function addMember(pokemon: string) {
        pokemon = pokemon.toLowerCase();

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

    function removeMember(index: number) {
        setMembers(members.filter((_, i) => i !== index));
    }

    return (
        <div className="team-creation"> 
            <input type="text" id="add-pokemon" placeholder="Add Pokemon"/>
            <button onClick={() => {
                addMember((document.getElementById("add-pokemon") as HTMLInputElement)?.value || "")}}>
                    Add to Team
            </button>

            <div className="creation-card" id="team-card">
                {members.map((member: string, index: number) => (
                    <div key={index} className="team-member">
                        <PokemonCard key={index} pokemon={member} />
                        <button onClick={() => removeMember(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Team Name"/>

        </div>
    )
}

export default TeamCreation;