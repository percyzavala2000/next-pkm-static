import {  useState } from "react";
import {Button, Card, Container, Grid, Image, Text} from "@nextui-org/react";
import  {NextPage, GetStaticPaths, GetStaticProps} from "next";
import {Layout} from '../../components/layouts';
import {PokeID} from '../../interfaces/pokemon';
import { LocalStorageFavoritos, existFvoritos } from '../../utils';
import confetti from "canvas-confetti";
import { getPokemonInfo } from '../../utils/getPokemonInfo';
interface Props {
    pokemon : PokeID
}

const PokemonPages : NextPage < Props > = ({pokemon}) => {
    
    const [isInFavoritos, setisInFavoritos] = useState(existFvoritos(pokemon.id)
    );
 
      
      const handleClick = (id:any) => {

        LocalStorageFavoritos(id);
        setisInFavoritos(!isInFavoritos);

        if(isInFavoritos){return }

        confetti({
          zIndex: 999,
          particleCount: 100,
          origin: { x: 1, y: 0 },
          spread: 160,
          angle: -100,
        });
  

    }

    return (
        <Layout title={`este es el pokemon ${pokemon.name} `}>
            <Grid.Container gap={2} justify={"flex-start"}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card isHoverable isPressable>
                        <Card.Body css={{
                            p: 1
                        }}>
                            <Card.Image
                                src={`${pokemon.sprites.other
                                ?.dream_world.front_default}`}
                                width="100%"
                                height={200}
                                alt={pokemon.name}/>
                        </Card.Body>

                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card isHoverable isPressable>
                            <Card.Header css={{display:"flex",justifyContent:"space-between"}} >
                                <Text h1>{pokemon.name}</Text>
                                <Button color="gradient" ghost={!isInFavoritos} onClick={()=>handleClick(pokemon.id)}   > {!isInFavoritos?"Guardar en Favoriots":"Quitar de Fvoritos"}
                                </Button>
                            </Card.Header>

                        <Card.Body css={{
                            p: 1
                        }}>
                          <Text size={30} >Sprites:</Text>
                          <Container direction="row" display="flex" >
                            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                          </Container>
                        </Card.Body>
                    </Card>

                </Grid>
            </Grid.Container>

        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that
// use dynamic routes

export const getStaticPaths : GetStaticPaths = async(ctx) => {

    const poke151 = [...Array(151)].map((_, i) => `${i + 1}`);

    return {
        //paths: [{ params: {id: "1"}}],
        paths: poke151.map(id => ({params: {
                id
            }})),
       // fallback: false
       fallback:"blocking"
    }
}

export const getStaticProps : GetStaticProps = async({params}) => {
    const {id} = params as {id:string};

    const pokemon = await getPokemonInfo(id);

    if(!pokemon){
        return {
            redirect: {
                destination: "/",
                permanent: false
        }
}
}

    return {
      props: {
        pokemon: pokemon
      },
      revalidate:86400
    };
}

export default PokemonPages;
