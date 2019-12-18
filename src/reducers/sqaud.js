const initialState = {
  pokemons: []
}

const sqaud = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SELECTED_POKEMON_TO_SQAUD':
      return { 
        ...state,
          pokemons: [
            ...state.pokemons, action.pokemon
          ]
      };
    default:
      return state;
  }
}

export default sqaud;