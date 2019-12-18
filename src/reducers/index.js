import { combineReducers } from 'redux';
import selectedPokemon from './pokemons';
import sqaud from './sqaud';

export default combineReducers({
  selectedPokemon,
  sqaud
});