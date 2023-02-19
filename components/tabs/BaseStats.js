import StatsView from "../baseStats/StatsView";
import TypeEffectiveness from "../baseStats/TypeEffectiveness";

export default function BaseStats({ pokemonData }) {
    return (
        <>
            <StatsView stats={pokemonData.baseStats} />
            {/* <TypeEffectiveness
                pokemonName={pokemonData.name}
                effectivenessList={pokemonData.typeEffectiveness}
            /> */}
        </>
    );
}
