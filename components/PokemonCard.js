import Image from "next/image"
import Link from "next/link"

export const PokemonCard = ({pokemons}) => {
  return (
    <div className="card">
        <Link href={`/name/${ pokemons.name }`}>
            <Image src={pokemons.img} width={40} height={40} alt={pokemons.name}/>
        </Link>
        <p>{ pokemons.name }</p>
    </div>
  )
}
