import { Container, Text,Image } from '@nextui-org/react';



export const NoFvoritos = () => {
  return (
    <Container css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alingSelf: 'center',
        height: 'calc(100vh - 100px)',

    }}  >

       <Text>No hay Favoritos</Text> 
       <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" width={250} height ={250} css={{opacity:0.1}}  />
    </Container>
)}
