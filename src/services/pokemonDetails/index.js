import gql from 'graphql-tag';

const GET_POKEMON_DETAILS = gql`
query Pokemon($selectedPokemon: String!) {
  Pokemon(name: $selectedPokemon) {
    image,
    stats{
      name,
      value
    },
    moves{
      name
    },
    types{
      name
    }
  }
}
`;

export default GET_POKEMON_DETAILS;