import { Fragment, useState, useEffect } from 'react';
import { Layout } from "../../components/layouts"
import { Card, Grid } from '@nextui-org/react';
import { pokemonsFavoritos } from '../../utils';
import { NoFvoritos } from '../../components/ui';
import { FavoritesPokemon } from '../../components/pokemon/FavoritesPokemon';


const FavoritosPage = () => {
    const [favoritosPokemon, setFavoritosPokemon] = useState<number[]>([]);


    useEffect(() => {
      setFavoritosPokemon(pokemonsFavoritos())
     
      
    }, []);

  
  return (
    <Fragment>
      <Layout title="favoritos">
        <h1>Favoritos</h1>
        {favoritosPokemon.length === 0 ? (<NoFvoritos />) : 
          (<FavoritesPokemon pokemons={favoritosPokemon}/>)}
        
      </Layout>
    </Fragment>
  );
}

export default FavoritosPage