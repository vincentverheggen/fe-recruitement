import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import styled, { ThemeProvider } from "styled-components";
import client from "../graphql";
import SearchPokemonsList from './searchPokemonsList/index';
import PokemonDetails from "./pokemonDetails/index";
import SelectedSqaud from "./selectedSquad/index";

const theme = {
  color: {
    blue: "#3A5D9F",
    yellow: "#FDCC07",
    white: "#FFFFFF",
    grey: "#C1C8CA"
  },
  typesColor: {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice : "#96D9D6",
    fighting : "#C22E28",
    poison : "#A33EA1",
    ground : "#E2BF65",
    flying : "#A98FF3",
    psychic : "#F95587",
    bug : "#A6B91A",
    rock : "#B6A136",
    ghost : "#735797",
    dragon : "#6F35FC",
    dark : "#705746",
    dteel : "#B7B7CE",
    fairy : "#D685AD"
  }
};

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 200px;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const ConfigPokemon = styled.div`
  max-width: 980px;
  margin-top: 25px;
  position: relative;
  float: left;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Container>
            <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554" />
            <ConfigPokemon>
              <SearchPokemonsList />
              <PokemonDetails />
            </ConfigPokemon>
            <SelectedSqaud />
          </Container>
        </ThemeProvider> 
      </ApolloProvider>
    );
  }
};
export default App;