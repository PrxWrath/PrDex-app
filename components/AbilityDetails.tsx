import PokeCard from "./PokeCard";
interface AbilityDetailsProps{
    ability:any
}

export default function AbilityDetailPanel({ability}:AbilityDetailsProps){
    const enDescription = ability.effect_entries?.find((e:any)=>e.language.name=='en')
    const effect = enDescription?.effect?enDescription.effect: "";
    
    return(
        <div className="flex-col w-full p-3 my-4">
            <div className="bg-purple-400 shadow-md shadow-purple-300 text-slate-900 font-bold p-2 mx-auto w-2/3 max-w-2/3 rounded-lg text-center">
                <h3 className="text-xl my-2">{ability.name.toUpperCase()}</h3>
                {effect}
            </div>
            <h2 className="text-xl my-4 text-center">Pokemons With Ability</h2>
            <div className='mx-auto max-h-80 overflow-y-scroll p-3 grid text-center lg:grid-cols-4 sm:grid-cols-3 gap-1.5' style={{width: '600px'}}>
                {ability.pokemon?.map((pokemon:any)=>{
                    return (<PokeCard name={pokemon.pokemon.name} key={pokemon.pokemon.name+"card"}/>)
                })}

            </div>
        </div>
    )
}