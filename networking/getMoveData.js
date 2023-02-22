import {
    BASE_POKEAPI_URL,
    camelCaseString,
    getMoveCategory,
    getMoveLearnCondition,
    isVersionGroupAllowed,
} from "../utils/pokeApiHelpers";

export default getMoveData = async (moveId, learnMethod, learnLevel) => {
    // Fetch the move data
    const moveApiResponse = await fetch(`${BASE_POKEAPI_URL}move/${moveId}`);
    const moveData = await moveApiResponse.json();

    // Data formatting //
    const descriptionIndex = moveData.flavor_text_entries.findIndex(
        (desc) =>
            desc.language.name === "en" &&
            isVersionGroupAllowed(desc.version_group.name)
    );
    ////////////////////

    return {
        id: moveId,
        name: camelCaseString(moveData.name),
        description:
            descriptionIndex > -1
                ? moveData.flavor_text_entries[descriptionIndex].flavor_text
                : "Missing Data",
        learnCondition: getMoveLearnCondition(learnMethod, learnLevel),
        power: moveData.power ? moveData.power : 0,
        accuracy: moveData.accuracy ? moveData.accuracy : 0,
        effect: moveData.effect_chance ? moveData.effect_chance : 0,
        category: getMoveCategory(moveData.damage_class.name),
        type: moveData.type.name,
    };
};
