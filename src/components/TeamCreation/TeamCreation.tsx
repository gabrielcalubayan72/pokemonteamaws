import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';


function TeamCreation() {

    const [teamName, setTeamName] = useState([]);
    const [members, setMembers] = useState([]);

    function addMember(pokemon: string) {
        if (members.length < 6) {
            setMembers([...members, pokemon]);
        } else {
            alert("Team is full! Maximum 6 Pokemon allowed.");
        }
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
                    <PokemonCard key={member} pokemon={member} />
                ))}
            </div>
            <input type="text" placeholder="Team Name"/>

        </div>
    )
}

export default TeamCreation;