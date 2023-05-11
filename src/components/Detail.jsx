import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function Detail() {

    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            data.name?
                setCharacter(data) : 
                window.alert('No hay personajes con ese ID');
        });
        // return setCharacter({});
    }, []);

    return (
        <div>
            {character.name? (
                <div>
                    <h1>{character.name}</h1>
                    <h3>Specie: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin.name}</h3>
                    <h3>Status: {character.status}</h3>
                    <img src={character.image} alt={`${character.name} image`} />
                </div>
            ) : (
                <p>Loading character ...</p>
            )}
        </div>
    )
}