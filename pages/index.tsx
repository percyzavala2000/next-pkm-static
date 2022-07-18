import { Grid} from '@nextui-org/react';
import type {NextPage, GetStaticProps}
from 'next'
import {pokeApi} from '../api';
import {Layout} from '../components/layouts'
import {Pokemon, ResultPokemon} from '../interfaces';
import {CardComponent} from '../components/pokemon';

interface Props {
    pokemons : ResultPokemon[]
}

const Home : NextPage < Props > = ({pokemons}) => {

    return (
        <Layout title="Listado de Pokeones">
            <Grid.Container gap={2} justify={"flex-start"}>
                <CardComponent pokemons={pokemons}/>
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps : GetStaticProps = async(ctx) => {

    const {data} = await pokeApi.get < Pokemon > ('/pokemon?limit=151');
    const pokemon = data.results;

    const datos : ResultPokemon[] = pokemon.map((pokemon, index) => {
        // console.log("aqui pokemon", pokemon.url);
        const id = index + 1;

        //   console.log("aqui data", data.data.sprites.front_default);
        return {id, name: pokemon.name, url: pokemon.url, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`};
    });

    return {
        props: {
            pokemons: datos
        }
    }
  
}

export default Home
