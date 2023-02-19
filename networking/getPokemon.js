import getPokemonIDbyURL from "../utils/pokeApiHelpers";
import getPokemonData from "./getPokemonData";
import { BASE_POKEAPI_URL } from "../utils/pokeApiHelpers";

export default getPokemon = async () => {
    // Fetch the pokemon list
    const apiResponse = await fetch(`${BASE_POKEAPI_URL}pokemon`);
    const data = await apiResponse.json();

    const { results } = data;

    // const pokemon = results.map(async (pkmn) => {
    //     const pokemonID = getIDfromURL(pkmn.url);
    //     // const pokemonData = await getPokemonData(pokemonID);

    //     // return pokemonData;
    // });
};
