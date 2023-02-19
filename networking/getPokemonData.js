import {
    BASE_POKEAPI_URL,
    camelCaseString,
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
    getIDfromURL,
    getAbilityTypeName,
} from "../utils/pokeApiHelpers";

export default getPokemonData = async (pkmnID) => {
    // Get data for pokemon and pokemon species
    const pokeResults = (
        await Promise.all([
            fetch(`${BASE_POKEAPI_URL}pokemon/${pkmnID}`),
            fetch(`${BASE_POKEAPI_URL}/pokemon-species/${pkmnID}`),
        ])
    ).map((r) => r.json());

    const [pokemonData, pokemonSpeciesData] = await Promise.all(pokeResults);

    // Get data for ability description
    let previousID = "";
    const abilityIDs = pokemonData.abilities.reduce((acc, curr) => {
        let currentID = getIDfromURL(curr.ability.url);
        if (currentID !== previousID) {
            previousID = currentID;
            return [...acc, currentID];
        }

        return acc;
    }, []);

    const abilityFetches = abilityIDs.map((abilityID) => {
        return fetch(`${BASE_POKEAPI_URL}ability/${abilityID}`);
    });

    const abilityResults = (await Promise.all(abilityFetches)).map((r) =>
        r.json()
    );

    const abilitiesData = await Promise.all(abilityResults);

    // Data Processing //
    const generaIndex = pokemonSpeciesData.genera.findIndex(
        (genera) => genera.language.name === "en"
    );

    const descriptionIndex = pokemonSpeciesData.flavor_text_entries.findIndex(
        (entry) =>
            entry.language.name === "en" && isVersionAllowed(entry.version.name)
    );

    const typesFormatted = pokemonData.types.map((type) => {
        return camelCaseString(type.type.name);
    });

    const eggGroupsFormatted = pokemonSpeciesData.egg_groups.map((eggGroup) => {
        if (eggGroup.name === "no-eggs" || eggGroup.name === "ditto")
            return "Not Breedable";

        return camelCaseString(eggGroup.name);
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

    const abilitiesFormatted = pokemonData.abilities.map((ability, index) => {
        const abilityDescIndex = abilitiesData[index].effect_entries.findIndex(
            (effect) => effect.language.name === "en"
        );

        return {
            name: camelCaseString(ability.ability.name),
            description:
                abilitiesData[index].effect_entries[abilityDescIndex]
                    .short_effect,
            type: getAbilityTypeName(ability.slot),
        };
    });
    /////////////////////////////

    return {
        id: pokemonData.id,
        name: camelCaseString(pokemonData.name),
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
        abilities: abilitiesFormatted,
    };
};
