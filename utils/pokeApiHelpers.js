export const BASE_POKEAPI_URL = "https://pokeapi.co/api/v2/";

export function getPokemonIDbyURL(url) {
    return url.split("/")[6];
}
