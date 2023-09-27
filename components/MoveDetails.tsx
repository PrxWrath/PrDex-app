import Image from "next/image";
import PokeCard from "./PokeCard";
import { Types } from "@/lib/pokeTypes";

interface MoveDetailsProps{
    move:any
}

export default function MoveDetailPanel({move}:MoveDetailsProps){
    const enDescription = move.effect_entries.find((e:any)=>e.language.name=='en')
    let effect = enDescription?.effect;
    effect = effect?.replace("$effect_chance", move.effect_chance);

    return(
        <div className="flex-col w-full p-3 my-4">
            <div className="border border-yellow-400 font-bold p-2 mx-auto w-2/3 max-w-2/3 rounded-lg text-center">
                <h3 className="text-xl my-2">{`${move.name.toUpperCase()} (${move.damage_class.name=="physical"?'phys':'spl'})`}</h3>
                <Image
                    alt="moveType"
                    src={Types[`${move.type.name}`]}
                    width={60}
                    height={60}
                    className="mx-auto rounded-full m-2 p-2"
                />
                <div className="flex w-full p-2 justify-center">
                    <h3 className="mx-2">Power: {move.power}</h3>
                    <h3 className="mx-2">PP: {move.pp}</h3>
                    <h3 className="mx-2">Priority: {move.priority}</h3>
                </div>
                <div className="w-full text-center">
                    {effect}
                </div>
                
            </div>
            <h2 className="text-xl my-4 text-center">Pokemons With Move</h2>
            <div className='mx-auto max-h-80 overflow-y-scroll p-3 grid text-center lg:grid-cols-4 sm:grid-cols-3 gap-1.5' style={{width: '600px'}}>
                {move.learned_by_pokemon?.map((pokemon:any)=>{
                    return (<PokeCard pokemon={pokemon} key={pokemon.name+"card"} img={false} team={false} setTeam={null}/>)
                })}

            </div>
        </div>
    )
}