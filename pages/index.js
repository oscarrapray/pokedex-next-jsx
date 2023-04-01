import { PokemonCard } from '@/components/PokemonCard'
import { PokemonLayout } from '@/components/layouts/PokemonLayout'
import axios from 'axios'

export default function Home({pokemons}) {

  return (
    <PokemonLayout title='Listado de Pokémons'>
        <h1>Simple Pokedex</h1>
        <div className='container-card'>
            {pokemons.map(poke =>(
              <PokemonCard key={poke.id} pokemons={poke}/>
            ))}
            
        </div>
    </PokemonLayout>
  )
}


export const getServerSideProps = async () => {
  const { data } = await  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemons = data.results.map((poke,i)=>({
    ...poke,
    id : i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))
   
  return {
    props: {
      pokemons
    }
  }
}


// export const getStaticProps = async (ctx) => {
//   const { data } = await  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

//   return {
//     props: {
//       pokemon:data.results
//     }
//   }
// }
