import { useState } from 'react'

import '../../App.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import './TeamCreation.css'


function TeamCreation({names}: {names: string[]}) {
    const [teamName, setTeamName] = useState<string>([]);
    const [members, setMembers] = useState<string[]>([]);
    const [searchString, setSearchString] = useState<string>("");
    const [typeColors, setTypeColors] = useState<string[]>([]);

    function addMember(pokemon: string) {
        pokemon = pokemon.toLowerCase();

        if (!(names.includes(pokemon))) {
            alert("Pokémon not found!");
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
        setTypeColors(typeColors.filter((_, i) => i !== index));
    }
    
    async function saveTeam() {
        if (/^\s*$/.test(teamName)) {
            alert("Cannot save a team without a name!");
            return;
        }

        const requestOptions = {
            method: 'POST',
            body: btoa(JSON.stringify(
                { name: teamName, pokemons: members }
            ))
        };

        const response = await fetch('https://hsw387dosf.execute-api.ap-southeast-2.amazonaws.com/team', requestOptions);
        const data = await response.json();
    }

    const matchingNames = names.filter(name => name.toLowerCase().includes(searchString.toLowerCase())).map(name =>
        <option value={name}></option>
    );

    return (
        <div className="team-creation"> 
            <input className='add-pokemon-input' list="pokemon-list" type="text" id="add-pokemon" placeholder="Add Pokémon" onInput={e => setSearchString((e.target as HTMLTextAreaElement).value)}/>

            <datalist id="pokemon-list">
                {matchingNames}
            </datalist>

            <button 
                className="creation-add"
                onClick={() => {
                addMember((document.getElementById("add-pokemon") as HTMLInputElement)?.value || "")}}>
                    Add to Team
            </button>

            <div className="creation-card" id="team-card">
                {members.map((member: string, index: number) => (
                    <div key={index} className="team-member" style={{ backgroundColor: typeColors[index] || 'gray' }}>
                        <PokemonCard key={index} pokemon={member} members={members} setTypeColors={setTypeColors} typeColors={typeColors}/>
                        <button className='remove-button' onClick={() => removeMember(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <input className="team-name-input" type="text" placeholder="Team Name" onInput={e => setTeamName((e.target as HTMLTextAreaElement).value)}/>

            <button className="creation-save" onClick={saveTeam}>
                Save this team! 
            </button>

        </div>
    )
}

export default TeamCreation;