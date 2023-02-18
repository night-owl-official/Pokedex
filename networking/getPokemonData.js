import {
    BASE_POKEAPI_URL,
    capitalizeFirst,
    decimetersToMeters,
    decimetersToFeet,
    hectogramsToKilograms,
    hectogramsToPounds,
    getPokemonImagebyID,
    isVersionAllowed,
    getCaptureRate,
    getBaseEggSteps,
} from "../utils/pokeApiHelpers";

export default getPokemonData = async (pkmnID) => {
    // Get data for pokemon and pokemon species
    const results = (
        await Promise.all([
            fetch(`${BASE_POKEAPI_URL}pokemon/${pkmnID}`),
            fetch(`${BASE_POKEAPI_URL}/pokemon-species/${pkmnID}`),
        ])
    ).map((r) => r.json());

    const [pokemonData, pokemonSpeciesData] = await Promise.all(results);

    // Data Processing

    const generaIndex = pokemonSpeciesData.genera.findIndex(
        (genera) => genera.language.name === "en"
    );

    const descriptionIndex = pokemonSpeciesData.flavor_text_entries.findIndex(
        (entry) =>
            entry.language.name === "en" && isVersionAllowed(entry.version.name)
    );

    return {
        id: pokemonData.id,
        name: capitalizeFirst(pokemonData.name),
        image: getPokemonImagebyID(pkmnID),
        genera:
            generaIndex > -1
                ? pokemonSpeciesData.genera[generaIndex].genus
                : "",
        description:
            descriptionIndex > -1
                ? pokemonSpeciesData.flavor_text_entries[descriptionIndex]
                      .flavor_text
                : "",
        baseExp: pokemonData.base_experience,
        height: `${decimetersToMeters(
            pokemonData.height
        )} mt (${decimetersToFeet(pokemonData.height)} ft)`,
        weight: `${hectogramsToKilograms(
            pokemonData.weight
        )} kg (${hectogramsToPounds(pokemonData.weight)} lbs)`,
        baseHappiness: pokemonSpeciesData.base_happiness,
        captureRate: getCaptureRate(pokemonSpeciesData.capture_rate),
        baseEggSteps: getBaseEggSteps(pokemonSpeciesData.hatch_counter),
    };
};
