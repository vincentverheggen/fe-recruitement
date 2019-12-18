const addSelectedPokemon = pokemonName => ({
    type: 'ADD_SELECTED_POKEMON',
    pokemonName
});

const addSelectedPokemonMove = pokemonMoveName => ({
    type: 'ADD_POKEMON_MOVE',
    pokemonMoveName
});

const deleteSelectedPokemon = pokemonMoveName => ({
    type: 'DELETE_SELECTED_POKEMON',
    pokemonMoveName
});

const addSelectedPokemonToSqaud = pokemon => ({
    type: 'ADD_SELECTED_POKEMON_TO_SQAUD',
    pokemon
});

export {
    addSelectedPokemon,
    addSelectedPokemonMove,
    deleteSelectedPokemon,
    addSelectedPokemonToSqaud
}