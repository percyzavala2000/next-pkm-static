import { Grid } from '@nextui-org/react';
import React from 'react'
import { FavoritosCardPokemon } from './FavoritosCardPokemon';

export const FavoritesPokemon = ({ pokemons }: any) => {
  return (
    <>
      <Grid.Container gap={2} justify={"flex-start"}>
        {pokemons.map((id: number, index: number) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index}>
            <FavoritosCardPokemon id={id} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

