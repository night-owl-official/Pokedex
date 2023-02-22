export const BASE_POKEAPI_URL = "https://pokeapi.co/api/v2/";

export function getIDfromURL(url) {
    return url.split("/")[6];
}

export function getPokemonImagebyID(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function camelCaseString(str) {
    const words = str.split("-");
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    return capitalizedWords.join(" ").trim();
}

export function isVersionAllowed(version) {
    return (
        version === "scarlet" ||
        version === "legends-arceus" ||
        version === "shield" ||
        version === "moon" ||
        version === "emerald" ||
        version === "soulsilver" ||
        version === "white"
    );
}

export function isVersionGroupAllowed(versionGroup) {
    return (
        versionGroup === "scarlet-violet" ||
        versionGroup === "sword-shield" ||
        versionGroup === "sun-moon" ||
        versionGroup === "emerald" ||
        versionGroup === "heartgold-soulsilver" ||
        versionGroup === "black-white"
    );
}

export function decimetersToMeters(value) {
    return (value * 0.1).toFixed(2);
}

export function decimetersToFeet(value) {
    return (value * 0.1 * 3.281).toFixed(2);
}

export function hectogramsToKilograms(value) {
    return (value * 0.1).toFixed(2);
}

export function hectogramsToPounds(value) {
    return (value * 0.1 * 2.205).toFixed(2);
}

export function getCaptureRate(value) {
    return (value / 255).toFixed(2) * 100;
}

export function getBaseEggSteps(value) {
    return 255 * value + value;
}

export function getGenderRates(rateInEighths) {
    const gender = [];

    if (rateInEighths === -1) {
        gender.push({ gender: "Genderless", rate: 0 });

        return gender;
    }

    const femalePercentage = (rateInEighths / 8) * 100;
    const malePercentage = 100 - femalePercentage;

    gender.push(
        { gender: "Male", rate: malePercentage },
        { gender: "Female", rate: femalePercentage }
    );

    return gender;
}

export function getStatName(stat) {
    switch (stat) {
        case "hp":
            return "HP";
        case "attack":
            return "Attack";
        case "defense":
            return "Defense";
        case "special-attack":
            return "Sp. Atk";
        case "special-defense":
            return "Sp. Def";
        case "speed":
            return "Speed";
        default:
            return "";
    }
}

export function getAbilityTypeName(type) {
    switch (type) {
        case 1:
            return "Ability 1";
        case 2:
            return "Ability 2";
        case 3:
            return "Hidden";
        default:
            return "";
    }
}

export function getMoveLearnCondition(method, lvl) {
    switch (method) {
        case "level-up":
            return `Level ${lvl}`;
        case "egg":
            return "Egg Move";
        case "tutor":
            return "Move Tutor";
        case "machine":
            return "TM";
        default:
            return "";
    }
}

export function getMoveCategory(category) {
    switch (category) {
        case "special":
            return "specialAttack";
        case "physical":
            return "physicalAttack";
        case "status":
            return "statusAttack";
        default:
            return "";
    }
}
