import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Pokedex.css";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then((response) => response.json())
            .then((data) => setPokemons(data.results))
            .catch((error) => console.error("Error al obtener los Pokémon:", error));
    }, []);

    return (
        <Layout>
            <div className="pokedex-container">
                <h1>Pokedex</h1>
                <ul className="pokemon-list">
                    {pokemons.map((pokemon, index) => {
                        const pokemonId = index + 1;
                        return (
                            <li key={pokemonId} className="pokemon-item">
                                <img 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} 
                                    alt={pokemon.name} 
                                />
                                <span className="pokemon-name">{pokemon.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Layout>
    );
};

export { Pokedex };
