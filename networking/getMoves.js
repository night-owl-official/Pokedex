import getMoveData from "./getMoveData";
import { BASE_POKEAPI_URL, getIDfromURL } from "../utils/pokeApiHelpers";

export default getMoves = async (
    pokemonID,
    offset = 0,
    latestMovesVersion = "",
    limit = 10
) => {
    // Fetch the pokemon data
    const pokemonApiResponse = await fetch(
        `${BASE_POKEAPI_URL}pokemon/${pokemonID}`
    );
    const pokemonData = await pokemonApiResponse.json();

    let latestVersionName = latestMovesVersion;

    if (latestVersionName === "") {
        // Get the latest game version where the Pokemon was last featured in
        let latestVersionIndex = -1;
        let biggestLength = 0;
        for (let i = 0; i < pokemonData.moves.length; ++i) {
            const currentLength =
                pokemonData.moves[i].version_group_details.length;

            if (biggestLength < currentLength) {
                biggestLength = currentLength;
                latestVersionIndex = i;
            }
        }

        latestVersionName =
            pokemonData.moves[latestVersionIndex].version_group_details[
                biggestLength - 1
            ].version_group.name;
    }

    // Get moves array starting at offset and ending at offset + limit
    // This is done to reduce the returned payload size
    const movesPortion = pokemonData.moves.slice(offset, offset + limit);

    const moves = await movesPortion.reduce(async (acc, curr) => {
        const accumulator = await acc;

        const resultIndex = curr.version_group_details.findIndex(
            (detail) => detail.version_group.name === latestVersionName
        );

        if (resultIndex > -1) {
            const moveID = getIDfromURL(curr.move.url);
            const moveLearnMethod =
                curr.version_group_details[resultIndex].move_learn_method.name;
            const moveLearnLevel =
                curr.version_group_details[resultIndex].level_learned_at;
            return [
                ...accumulator,
                await getMoveData(moveID, moveLearnMethod, moveLearnLevel),
            ];
        }

        return accumulator;
    }, []);

    return { moves: await Promise.all(moves), version: latestVersionName };
};
