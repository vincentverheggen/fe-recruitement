import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addSelectedPokemonMove } from '../../../reducers/actionTypes';
import get from 'lodash/get';

const Title = styled.h2`
  font-size: 0.75em;
  color: ${props => props.theme.color.blue};
  margin: 0 !important;
  text-align: center;
`;

const WrapperStats = styled.div`
  width: 100%;
  float: left;
`;

const Table = styled.div`
  width: 400px;
`;

const Td = styled.td`
  width: 225px;
  text-align: right;
`;

const StatName = styled.p`
  font-size: 0.75em;
  color: ${props => props.theme.color.yellow};
  margin: 0 !important;
  display: inline;
  padding-right: 10px;
`;

const StatValue = styled.p`
  font-size: 1.75em;
  color: ${props => props.theme.color.blue};
  margin: 0 !important;
  display: inline;
  padding-right: 10px;
`;

const Stats = ({
  pokemonStats
}) => {
return (
  <WrapperStats>
  <Title>STATS</Title>
  <Table>
    <tbody>
      <tr>
        <Td><StatName>{pokemonStats[0].name.toUpperCase()}</StatName><StatValue>{pokemonStats[0].value}</StatValue></Td>
        <Td><StatName>{pokemonStats[1].name.toUpperCase()}</StatName><StatValue>{pokemonStats[1].value}</StatValue></Td>
      </tr>
      <tr>
        <Td><StatName>{pokemonStats[2].name.toUpperCase()}</StatName><StatValue>{pokemonStats[2].value}</StatValue></Td>
        <Td><StatName>{pokemonStats[3].name.toUpperCase()}</StatName><StatValue>{pokemonStats[3].value}</StatValue></Td>
      </tr>
      <tr>
        <Td><StatName>{pokemonStats[4].name.toUpperCase()}</StatName><StatValue>{pokemonStats[4].value}</StatValue></Td>
        <Td><StatName>{pokemonStats[5].name.toUpperCase()}</StatName><StatValue>{pokemonStats[5].value}</StatValue></Td>
      </tr>
    </tbody>
  </Table>
  </WrapperStats>
);
};



const WrapperSelectedMoves = styled.div`
  width: 400px;
  float: left;
`;

const MoveName = styled.p`
  font-size: 1.5em;
  color: ${props => props.theme.color.yellow};
  margin: 0 !important;
  display: inline;
  padding-right: 10px;
`;

const TdMove = styled.td`
  width: 225px;
  text-align: left;
  padding-left: 20px;
`;

const SelectedMoves = ({
  selectedMoves
}) => {
  if (selectedMoves) {
    return (
      <WrapperSelectedMoves>
      <Title>SELECTED MOVES</Title>
      <Table>
        <tbody>
          <tr>
            <TdMove><MoveName>{ selectedMoves[0] ? selectedMoves[0] : null }</MoveName></TdMove>
            <TdMove><MoveName>{ selectedMoves[1] ? selectedMoves[1] : null }</MoveName></TdMove>
          </tr>
          <tr>
            <TdMove><MoveName>{ selectedMoves[2] ? selectedMoves[2] : null }</MoveName></TdMove>
            <TdMove><MoveName>{ selectedMoves[3] ? selectedMoves[3] : null }</MoveName></TdMove>
          </tr>
        </tbody>
      </Table>
      </WrapperSelectedMoves>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  selectedMoves: get(state, 'selectedPokemon.moves')
});

const SelectedMovesComponent = connect(mapStateToProps)(SelectedMoves);





const WrapperMoves = styled.div`
  width: 175px;
  float: left;
`;

const TitleMoves = styled.p`
  font-size: 0.75em;
  color: ${props => props.theme.color.yellow};
  margin: 0 !important;
  text-align: center;
`;

const Ul = styled.ul`
  list-style-type:none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

const WrapperListMoves = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  max-width: 100%;
  max-height: 250px;
`;

const Moves = ({
  pokemonMoves, addPokemonMove, selectedMoves
}) => {
  const listOfMoves = pokemonMoves.map((move) =>
  <li key={move.name} onClick={() => {addPokemonMove(move.name);}}>{move.name}</li>
  );

  if (selectedMoves && selectedMoves.length < 4) {
    return (
      <WrapperMoves>
        <TitleMoves>TUTOR MACHINE LEVEL-UP</TitleMoves>
        <WrapperListMoves>
          <Ul>{listOfMoves}</Ul>
        </WrapperListMoves>
      </WrapperMoves>
    );
  }
  else {
    return (
      <WrapperMoves>
        <TitleMoves>TUTOR MACHINE LEVEL-UP</TitleMoves>
        <Title>MOVES ARE FULL</Title>
      </WrapperMoves>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addPokemonMove: (move) => dispatch(addSelectedPokemonMove(move))
});

const MovesComponent = connect(mapStateToProps, mapDispatchToProps) (Moves);






const WrapperStatsAndSelectedMoves = styled.div`
width: 400px;
padding-top: 15px;
float: left;
`;

const StatsAndMoves = ({
    pokemonDetails
}) => {
  if (pokemonDetails) {
    return (
      <>
        <WrapperStatsAndSelectedMoves>
          <Stats pokemonStats={pokemonDetails.stats}/>
          <SelectedMovesComponent/>
        </WrapperStatsAndSelectedMoves>
        <MovesComponent pokemonMoves={pokemonDetails.moves}/>
      </>
    );
  }
  return null;
};

export default StatsAndMoves;