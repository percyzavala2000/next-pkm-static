
import { pokeApi } from '../api';
import { PokeID } from '../interfaces/pokemon';

export const getPokemonInfo = async(value:string) => {

  try {
    const { data } = await  pokeApi.get < PokeID > (`/pokemon/${value}`);
    
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }
    
  } catch (error) {
    return null
    
  }

}
