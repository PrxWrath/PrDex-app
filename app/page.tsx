import PokeGrid from '@/components/PokeGrid'
import { getPokeList, getPokeData, getPokeDataGrid } from '@/lib/pokeAPI'

export default async function Home() {
  const pokemon = await getPokeList();
    const pokeArr = [];
    for(let mon of pokemon){
        if(mon.img_default){
          //from file cache
          pokeArr.push(mon);
        }else{
          const res = await getPokeDataGrid(mon.name);
          pokeArr.push(res);
        }
        
    }
    
    return (
      <div>
        <PokeGrid pokemonList={pokeArr} team={false} setTeam={null}/>
      </div>  
    )
}
