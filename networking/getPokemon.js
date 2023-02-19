import getPokemonIDbyURL from "../utils/pokeApiHelpers";
import getPokemonData from "./getPokemonData";
import { BASE_POKEAPI_URL } from "../utils/pokeApiHelpers";

export default getPokemon = async () => {
    // Fetch the pokemon list
    const apiResponse = await fetch(`${BASE_POKEAPI_URL}pokemon`);
    const data = await apiResponse.json();

    const { results } = data;

    // TESTING CODE //
    getPokemonData(3).then((data) => console.log(data));
    /////////////////

    // const pokemon = results.map(async (pkmn) => {
    //     const pokemonID = getPokemonIDbyURL(pkmn.url);
    //     // const pokemonData = await getPokemonData(pokemonID);

    //     // return pokemonData;
    // });
};
