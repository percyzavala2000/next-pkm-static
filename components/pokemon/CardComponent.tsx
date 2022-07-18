import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC, Fragment } from "react";
import { ResultPokemon } from "../../interfaces";
import { useRouter } from 'next/router';

interface Props {
  pokemons: ResultPokemon[];
}

export const CardComponent:FC<Props> = ({pokemons}) => {

  const router=useRouter();
  
  const onClickUrl = (name:string) => {
    //console.log("aqui id", id);
    
    // router.push(`pokemon/${id}`);
     router.push(`name/${name}`);
  }
  return (
    <Fragment>
        {pokemons.map(({ id, name, img }) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={id} onClick ={()=>onClickUrl(name)} >
            <Card isHoverable isPressable>
              <Card.Body css={{ p: 1 }}>
              
                <Card.Image src={`${img}`} width="100%" height={140} objectFit="contain" alt={name} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between" >
                  <Text transform="capitalize" >{name}</Text>
                  <Text>{id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
    
    </Fragment>
  );
};
