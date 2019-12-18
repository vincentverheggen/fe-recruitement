const initialState = {
  moves: []
};

const selectedPokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_POKEMON':
      return {
        ...state,
        name: action.pokemonName
      };
      case 'ADD_POKEMON_MOVE':
        return { 
          ...state,
            moves: [
              ...state.moves, action.pokemonMoveName
            ]
        };
      case 'DELETE_SELECTED_POKEMON':
        return state = initialState;
      case 'ADD_SELECTED_POKEMON_TO_SQAUD':
        return {
          ...state,
          sqaud: [
            action.pokemon
          ]
        };
    default:
      return state;
  }
}

export default selectedPokemon;