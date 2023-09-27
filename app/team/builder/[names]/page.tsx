import TeamBuilder from "@/components/teamBuilder/TeamBuilder";
import { getPokeData } from "@/lib/pokeAPI";

interface BuilderProps{
    params:{
        names:string
    }
}

export default async function Builder({params}:BuilderProps) {
    const {names} = params;
    const pokeNames = names.split('%7C');
    let pokemonList:any = [];
    //get specific details of team mons
    for(let name of pokeNames){
        if(name!=''){
            const pokeDat =  await getPokeData(name);
            pokemonList.push(pokeDat);
        }
    }

    return (
        <div>
            <TeamBuilder pokemonList={pokemonList} teamStore={null}/>
        </div>
    )
}