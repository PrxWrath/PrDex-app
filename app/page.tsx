import PokeGrid from '@/components/PokeGrid'
import { getPokeList } from '@/lib/pokeAPI'
import Image from 'next/image'

export default async function Home() {
  const pokemonList = await getPokeList();
  return (
      <div>
        <PokeGrid pokemonList={pokemonList}/>
      </div>  
    )
}
