const BASE_POKEAPI_URL = "https://pokeapi.co/api/v2/";

export default getPokemon = async () => {
    // Fetch the pokemon list
    const apiResponse = await fetch(`${BASE_POKEAPI_URL}pokemon`);
    const data = await apiResponse.json();

    const { results } = data;

    // const pokemon = results.map(async pkmn => {
    //     // Get Pokemon ID
    //     // Get Pokemon Data
    // });
};
