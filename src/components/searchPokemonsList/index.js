import React, { useState } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { useQuery } from '@apollo/react-hooks';
import GET_POKEMONS from './../../services/pokemons/index';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import { addSelectedPokemon } from '../../reducers/actionTypes';

const Wrapper = styled.div`
width: 175px;
height: 250px;
float: left;
margin-right: 40px;
`;

const Title = styled.h2`
  font-size: 1em;
  color: ${props => props.theme.color.yellow};
  margin: 0 !important;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.color.grey};
  border: 3px solid ${props => props.theme.color.blue};
  border-radius: 3px;
  width: 100%;
`;

const Button = styled.button`
  color: ${props => props.theme.color.yellow};
  background: ${props => props.theme.color.blue};

  font-size: 1em;
  text-align: left;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 100%;
`;

const WrapperList = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  max-height: 200px;
`;

const Ul = styled.ul`
  list-style-type:none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

const SearchPokemonsList = ({
  selectedPokemon
}) => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [filterName, setFilterName] = useState('');

  if (loading) return 'Loading pokémons...';
    if (error) return `Error! ${error.message}`;
  
    let pokemons = data.Pokemons;
    // Set alfabetic
    pokemons = sortBy(pokemons, (p) => p.name);
    if (!isEmpty(filterName)) {
      // Filtering on input
      pokemons = filter(pokemons, (pokemon) => {
        return pokemon.name.indexOf(filterName)>-1;
      });
    }

    const pokemonsList = pokemons.map((pokemon) =>
    <li key={pokemon.name}><Button onClick={() => selectedPokemon(pokemon)}>{pokemon.name.toUpperCase()}</Button></li>
    );

    return (
      <Wrapper>
      <Title>SELECT A POKEMON</Title>
      <Input placeholder="TYPE TO FILTER" onChange={(e) => setFilterName(e.target.value)}/>
      <WrapperList>
        <Ul>{pokemonsList}</Ul>
      </WrapperList>
      </Wrapper>
    );
}

const mapDispatchToProps = dispatch => ({
  selectedPokemon: (pokemon) => (dispatch(addSelectedPokemon(pokemon.name)))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SearchPokemonsList);