import { getIDfromURL } from "../utils/pokeApiHelpers";
import getPokemonData from "./getPokemonData";
import { BASE_POKEAPI_URL } from "../utils/pokeApiHelpers";

export default getPokemon = async (offset = 0, limit = 20) => {
    // Fetch the pokemon list
    const queryString = `?limit=${limit}&offset=${offset}`;
    const apiResponse = await fetch(`${BASE_POKEAPI_URL}pokemon${queryString}`);
    const data = await apiResponse.json();

    const { results } = data;

    const pokemon = results.map(async (pkmn) => {
        const pokemonID = getIDfromURL(pkmn.url);
        return await getPokemonData(pokemonID);
    });

    return await Promise.all(pokemon);
};
