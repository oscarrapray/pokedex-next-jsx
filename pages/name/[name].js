import { PokemonLayout } from "@/components/layouts/PokemonLayout"
import axios from "axios"
import Image from "next/image"

 const PokemonPage = ({pokemon}) => {
  return (
     <PokemonLayout>
        <div className="poke-info">
           <Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} 
              width={40} height={40} alt={pokemon.name}/>
              <div className="poke-title">
                 <p>{pokemon.name}</p>
              </div>
        </div>
     </PokemonLayout>
  )
}

export default PokemonPage


export const getStaticPaths = async () => {
    const {data:{results}} = await  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

     const paths = results.map(poke =>({
        params:{
            name:poke.name
        }
     }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const {name} = params
    const { data } = await  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    const pokemon= {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

    return {
        props: {
            pokemon
        }
    }
}
