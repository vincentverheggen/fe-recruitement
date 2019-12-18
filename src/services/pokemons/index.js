import gql from 'graphql-tag';

const GET_POKEMONS = gql`
{
  Pokemons(first: 151){
      name
    }
}
`;

export default GET_POKEMONS;