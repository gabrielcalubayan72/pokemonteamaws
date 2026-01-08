import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';


function TeamCreation({names}: {names: string[]}) {
    const [teamName, setTeamName] = useState([]);
    const [members, setMembers] = useState([]);

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
            <input type="text" placeholder="Team Name"/>

        </div>
    )
}

export default TeamCreation;