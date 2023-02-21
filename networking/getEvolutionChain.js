import {
    BASE_POKEAPI_URL,
    camelCaseString,
    getIDfromURL,
    getPokemonImagebyID,
} from "../utils/pokeApiHelpers";

export default getEvolutionChain = async (pokemonID) => {
    const pokemonSpeciesApiRes = await fetch(
        `${BASE_POKEAPI_URL}pokemon-species/${pokemonID}`
    );
    const pokemonSpeciesData = await pokemonSpeciesApiRes.json();

    const evolutionChainID = getIDfromURL(
        pokemonSpeciesData.evolution_chain.url
    );

    const evolutionChainApiRes = await fetch(
        `${BASE_POKEAPI_URL}evolution-chain/${evolutionChainID}`
    );
    const evolutionChainData = await evolutionChainApiRes.json();

    // This pokemon has no evolutions
    if (evolutionChainData.chain.evolves_to.length <= 0) return {};

    const baseEvolution = {
        name: camelCaseString(evolutionChainData.chain.species.name),
        image: getPokemonImagebyID(
            getIDfromURL(evolutionChainData.chain.species.url)
        ),
    };

    let secondEvolutions = [];

    const firstEvolutions = evolutionChainData.chain.evolves_to.map(
        (firstEvolution) => {
            // Might not have second evolutions
            if (firstEvolution.evolves_to.length > 0) {
                secondEvolutions = firstEvolution.evolves_to.map(
                    (secondEvolution) => {
                        const secondMinLevel =
                            secondEvolution.evolution_details[0].min_level;

                        return {
                            name: camelCaseString(secondEvolution.species.name),
                            image: getPokemonImagebyID(
                                getIDfromURL(secondEvolution.species.url)
                            ),
                            minLevel: secondMinLevel ? secondMinLevel : 0,
                        };
                    }
                );
            }

            const firstMinLevel = firstEvolution.evolution_details[0].min_level;

            return {
                name: camelCaseString(firstEvolution.species.name),
                image: getPokemonImagebyID(
                    getIDfromURL(firstEvolution.species.url)
                ),
                minLevel: firstMinLevel ? firstMinLevel : 0,
            };
        }
    );

    return {
        base: baseEvolution,
        first: firstEvolutions,
        second: secondEvolutions,
    };
};
