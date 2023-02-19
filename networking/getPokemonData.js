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
    getGenderRates,
    getStatName,
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

    // Get data for ability description

    // Data Processing //
    const generaIndex = pokemonSpeciesData.genera.findIndex(
        (genera) => genera.language.name === "en"
    );

    const descriptionIndex = pokemonSpeciesData.flavor_text_entries.findIndex(
        (entry) =>
            entry.language.name === "en" && isVersionAllowed(entry.version.name)
    );

    const typesFormatted = pokemonData.types.map((type) => {
        return capitalizeFirst(type.type.name);
    });

    const eggGroupsFormatted = pokemonSpeciesData.egg_groups.map((eggGroup) => {
        if (eggGroup.name === "no-eggs" || eggGroup.name === "ditto")
            return "Not Breedable";

        return capitalizeFirst(eggGroup.name);
    });

    const evYieldFormatted = pokemonData.stats.reduce((acc, curr) => {
        if (curr.effort > 0) {
            return [
                ...acc,
                { stat: getStatName(curr.stat.name), value: curr.effort },
            ];
        }

        return acc;
    }, []);

    const baseStatsFormatted = pokemonData.stats.map((stat) => {
        return { name: getStatName(stat.stat.name), value: stat.base_stat };
    });
    /////////////////////////////

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
        baseExp: pokemonData.base_experience ? pokemonData.base_experience : 0,
        height: `${decimetersToMeters(
            pokemonData.height
        )} mt (${decimetersToFeet(pokemonData.height)} ft)`,
        weight: `${hectogramsToKilograms(
            pokemonData.weight
        )} kg (${hectogramsToPounds(pokemonData.weight)} lbs)`,
        baseHappiness: pokemonSpeciesData.base_happiness,
        captureRate: getCaptureRate(pokemonSpeciesData.capture_rate),
        baseEggSteps: getBaseEggSteps(pokemonSpeciesData.hatch_counter),
        types: typesFormatted,
        gender: getGenderRates(pokemonSpeciesData.gender_rate),
        eggGroups: eggGroupsFormatted,
        evYield: evYieldFormatted,
        baseStats: baseStatsFormatted,
    };
};
