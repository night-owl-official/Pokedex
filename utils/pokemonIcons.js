const typeIcons = {
    normal: require("../assets/icons/normal.png"),
    fighting: require("../assets/icons/fighting.png"),
    flying: require("../assets/icons/flying.png"),
    poison: require("../assets/icons/poison.png"),
    ground: require("../assets/icons/ground.png"),
    rock: require("../assets/icons/rock.png"),
    bug: require("../assets/icons/bug.png"),
    ghost: require("../assets/icons/ghost.png"),
    steel: require("../assets/icons/steel.png"),
    fire: require("../assets/icons/fire.png"),
    water: require("../assets/icons/water.png"),
    grass: require("../assets/icons/grass.png"),
    electric: require("../assets/icons/electric.png"),
    psychic: require("../assets/icons/psychic.png"),
    ice: require("../assets/icons/ice.png"),
    dragon: require("../assets/icons/dragon.png"),
    dark: require("../assets/icons/dark.png"),
    fairy: require("../assets/icons/fairy.png"),
};

const moveCategoryIcons = {
    physicalAttack: require("../assets/icons/phatk.png"),
    specialAttack: require("../assets/icons/spatk.png"),
    statusAttack: require("../assets/icons/status.png"),
};

export function getTypeIconByType(type) {
    return typeIcons[type];
}

export function getMoveIconByType(type) {
    return moveCategoryIcons[type];
}
