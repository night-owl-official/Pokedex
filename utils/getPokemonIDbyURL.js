export default function getPokemonIDbyURL(url) {
    return url.split("/")[6];
}
