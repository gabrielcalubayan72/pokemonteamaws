import { useEffect, useState } from 'react'
import './PokemonCard.css'

import '../../App.css'
import bug from '../../assets/types/bug.png'
import fire from '../../assets/types/fire.png'
import flying from '../../assets/types/flying.png'
import grass from '../../assets/types/grass.png'
import water from '../../assets/types/water.png'
import electric from '../../assets/types/electric.png'
import poison from '../../assets/types/poison.png'
import normal from '../../assets/types/normal.png'
import ground from '../../assets/types/ground.png'
import fairy from '../../assets/types/fairy.png'
import fighting from '../../assets/types/fighting.png'
import psychic from '../../assets/types/psychic.png'
import rock from '../../assets/types/rock.png'
import ice from '../../assets/types/ice.png'
import ghost from '../../assets/types/ghost.png'
import dragon from '../../assets/types/dragon.png'
import dark from '../../assets/types/dark.png'
import steel from '../../assets/types/steel.png'

const typeImages: { [key: string]: string } = {
    bug: bug,
    fire: fire,
    flying: flying,
    grass: grass,
    water: water,
    electric: electric,
    poison: poison,
    normal: normal,
    ground: ground,
    fairy: fairy,
    fighting: fighting,
    psychic: psychic,
    rock: rock,
    ice: ice,
    ghost: ghost,
    dragon: dragon,
    dark: dark,
    steel: steel
};

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};


function PokemonCard({ pokemon, members, setTypeColors, typeColors }: { pokemon: string, members: string[], setTypeColors: React.Dispatch<React.SetStateAction<string[]>>, typeColors: string[] }) {
    const [spriteLink, setSpriteLink] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
            let data = await response.json();
            setSpriteLink(data.sprites.front_default);
            setTypes(data.types);
            setTypeColors([...typeColors, colours[data.types[0].type.name as keyof typeof colours] || 'gray']);
        };
        fetchPokemon();
    }, [members]);

    return (
        <div className="card-content">
            <img src={spriteLink}
                className="logo ditto" alt={`${pokemon} logo`} />
            <span className='pokemon-name-text'><strong>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</strong></span>
            <div className="types">
                {types.map((type: any, index: number) => (
                    <img src={typeImages[type.type.name]} alt={type.type.name} key={index} className="type-image" />
                ))}
            </div>
        </div>
    )
}

export default PokemonCard;