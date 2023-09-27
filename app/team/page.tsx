import PokeTeam from "@/components/teamBuilder/PokeTeam";
import { getPokeDataGrid, getPokeList } from "@/lib/pokeAPI"

export default async function TeamBuilder(){
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
            <PokeTeam pokemon={pokeArr}/>
        </div>
    )
}