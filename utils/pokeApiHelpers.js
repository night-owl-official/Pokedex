export const BASE_POKEAPI_URL = "https://pokeapi.co/api/v2/";

export function getPokemonIDbyURL(url) {
    return url.split("/")[6];
}

export function getPokemonImagebyID(id) {
    return `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"`;
}

export function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isVersionAllowed(version) {
    return (
        version === "scarlet" ||
        version === "legends-arceus" ||
        version === "shield" ||
        version === "emerald" ||
        version === "soulsilver" ||
        version === "white"
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
