import { BASE_POKEAPI_URL } from "../utils/pokeApiHelpers";

export default getTypeEffectiveness = async (types) => {
    // Get data for the types damage relations
    const typeFetches = types.map((type) => {
        return fetch(`${BASE_POKEAPI_URL}type/${type.toLowerCase()}`);
    });

    const typeResults = (await Promise.all(typeFetches)).map((r) => r.json());
    const typeData = await Promise.all(typeResults);

    const typesOrdered = [
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
    ];

    let type1Effects = [];
    let type2Effects = [];

    getEffectivenessOnType(typeData[0], type1Effects, typesOrdered);

    // If the Pokemon has double types we check for the effectiveness on the second type as well
    if (typeData.length === 2) {
        getEffectivenessOnType(typeData[1], type2Effects, typesOrdered);
    } else {
        // Pokemon has one type only, so the type2 array will be filled with 1s
        // to not affect the damage calculation
        for (let i = 0; i < typesOrdered.length; ++i) {
            type2Effects.push(1);
        }
    }

    // Construct the array of type effectiveness
    const typeEffectivenessFormatted = typesOrdered.map((type, index) => {
        return {
            type: type,
            effectiveness: type1Effects[index] * type2Effects[index],
        };
    });

    return typeEffectivenessFormatted;
};

function getEffectivenessOnType(typeInfo, typeEffects, allTypes) {
    for (let i = 0; i < allTypes.length; ++i) {
        // Check for 2x damage from the types in our list against the pokemon type
        if (
            typeInfo.damage_relations.double_damage_from.findIndex(
                (type) => type.name === allTypes[i]
            ) > -1
        ) {
            typeEffects.push(2);
        }
        // Check for 0.5x damage from the types in our list against the pokemon type
        else if (
            typeInfo.damage_relations.half_damage_from.findIndex(
                (type) => type.name === allTypes[i]
            ) > -1
        ) {
            typeEffects.push(0.5);
        }
        // Check for 0x damage from the types in our list against the pokemon type
        else if (
            typeInfo.damage_relations.no_damage_from.findIndex(
                (type) => type.name === allTypes[i]
            ) > -1
        ) {
            typeEffects.push(0);
        }
        // When it gets to this point, it means that the type has no strengths nor weaknesses
        else {
            typeEffects.push(1);
        }
    }
}
