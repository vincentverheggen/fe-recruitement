import React from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import get from 'lodash/get';

const Wrapper = styled.div`
max-width: 980px;
margin-top: 25px;
position: relative;
float: left;
`;

const Title = styled.h2`
  font-size: 1.25em;
  color: ${props => props.theme.color.yellow};
  margin: 0 !important;
`;

const PokemonWrapper = styled.div`
    width: 160px;
    padding: 50px 0;
    margin-top: 10px;
    margin-right: 3px;
    float: left;
    background-color: ${props => props.theme.color.grey};
    text-align: center;
    min-height: 250px;
    margin-bottom: 50px;
`;

const PokemonName = styled.h2`
  font-size: 1em;
  color: ${props => props.theme.color.white};
  margin: 0 !important;
`;

const Button = styled.button`
  color: ${props => props.theme.color.blue};
  background: ${props => props.theme.color.white};

  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border-radius: 3px;
  width: 80%;
  pointer-events: none;
`;

const SelectedSqaud = ({
    pokemons
}) => {
    return (
        <Wrapper>
            <Title>SELECTED SQAUD</Title>
            <PokemonWrapper>
            {
                pokemons[0] ? (
                    <>
                        <img src={pokemons[0].image} alt={pokemons[0].name}/>
                        <PokemonName>{pokemons[0].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[0].moves && pokemons[0].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
            <PokemonWrapper>
            {
                pokemons[1] ? (
                    <>
                        <img src={pokemons[1].image} alt={pokemons[1].name}/>
                        <PokemonName>{pokemons[1].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[1].moves && pokemons[1].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
            <PokemonWrapper>
            {
                pokemons[2] ? (
                    <>
                        <img src={pokemons[2].image} alt={pokemons[2].name}/>
                        <PokemonName>{pokemons[2].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[2].moves && pokemons[2].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
            <PokemonWrapper>
            {
                pokemons[3] ? (
                    <>
                        <img src={pokemons[3].image} alt={pokemons[3].name}/>
                        <PokemonName>{pokemons[3].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[3].moves && pokemons[3].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
            <PokemonWrapper>
            {
                pokemons[4] ? (
                    <>
                        <img src={pokemons[4].image} alt={pokemons[4].name}/>
                        <PokemonName>{pokemons[4].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[4].moves && pokemons[4].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
            <PokemonWrapper>
            {
                pokemons[5] ? (
                    <>
                        <img src={pokemons[5].image} alt={pokemons[5].name}/>
                        <PokemonName>{pokemons[5].name.toUpperCase()}</PokemonName>
                        {
                            pokemons[5].moves && pokemons[5].moves.map((move) => {
                                return <Button>{move}</Button>
                            })
                        }
                    </> ) : <p>empty</p>
            }
            </PokemonWrapper>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    pokemons: get(state, 'sqaud.pokemons')
});

export default connect(
  mapStateToProps
)(SelectedSqaud);