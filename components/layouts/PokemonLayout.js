import Head from "next/head"
import { NavBar } from "../NavBar"


export const PokemonLayout = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Oscar Rapray" />
    </Head>
    <NavBar/>
    <main className='container'>
        {children}
    </main>
    </> 
  )
}
