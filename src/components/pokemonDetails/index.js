import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import GET_POKEMON_DETAILS from './../../services/pokemonDetails/index';
import get from 'lodash/get';
import StatsAndMoves from './statsAndMoves/index';
import { deleteSelectedPokemon, addSelectedPokemonToSqaud } from '../../reducers/actionTypes';

const Wrapper = styled.div`
  width: 160px;
  padding-top: 15px;
  float: left;
`;

const Title = styled.h2`
  font-size: 1.25em;
  color: ${props => props.theme.color.blue};
  margin: 0 !important;
`;

const Button = styled.button`
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.blue};

  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 100%;
`;

const PokemonDetails = ({
    selectedPokemon, saveSelectedPokemon, getSqaud, selectedMoves
}) => {
    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: { selectedPokemon },
      });
    const lengthSqaudOk = getSqaud && getSqaud.length < 6 ? true : false;
    if (selectedPokemon) {
      if (lengthSqaudOk) {
        if (loading) return 'Loading pokémons details...';
        if (error) return `Error! ${error.message}`;
  
        const savePokemon = {
          name: selectedPokemon,
          image: data.Pokemon.image,
          moves: selectedMoves,
          types: data.Pokemon.types
        };
  
        return (
          <>
            <Wrapper>
            <img src={savePokemon.image} alt={savePokemon.name}/>
            <Title>{savePokemon.name.toUpperCase()}</Title>
            <Button onClick={() => {saveSelectedPokemon(savePokemon)}}>SAVE POKEMON</Button>
            </Wrapper>
            <StatsAndMoves pokemonDetails={data.Pokemon}/>
          </>
        );
      }
      else {
        return (
          <>
          <Wrapper>
            <Title>Sqaud is full</Title>
          </Wrapper>
        </>
        )
      }
    }
    return null;
};

const mapStateToProps = state => ({
  selectedPokemon: get(state, 'selectedPokemon.name'),
  selectedMoves: get(state, 'selectedPokemon.moves'),
  getSqaud: get(state, 'sqaud.pokemons')
});

const mapDispatchToProps = dispatch => ({
  saveSelectedPokemon: (pokemon) => (
    // eslint-disable-next-line
    dispatch(addSelectedPokemonToSqaud(pokemon)), 
    dispatch(deleteSelectedPokemon()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetails);