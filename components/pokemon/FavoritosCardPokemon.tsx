import React from 'react'
import {Card} from '@nextui-org/react';
import { useRouter } from 'next/router';

export const FavoritosCardPokemon = ({id}:any) => {

    const router = useRouter();
    
    const onClickUrl = () => {
        router.push(`/pokemon/${id}`);
    }


    return (
      <Card isHoverable isPressable onClick={onClickUrl}>
        <Card.Body
          css={{
            p: 1,
          }}
        >
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width="100%"
            height={200}
            alt="pokemon"
          />
        </Card.Body>
      </Card>
    );
}
