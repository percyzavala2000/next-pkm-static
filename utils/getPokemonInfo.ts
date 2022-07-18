
import { pokeApi } from '../api';
import { PokeID } from '../interfaces/pokemon';

export const getPokemonInfo = async(value:string) => {

  const { data } = await  pokeApi.get < PokeID > (`/pokemon/${value}`);
  //console.log("data", data);
  
return {
  id: data.id,
  name: data.name,
  sprites: data.sprites,
};

 
}
