import Link from "next/link"

interface PokeAbilityProps{
    abilities:any
}

export default function PokeAbilities({abilities}:PokeAbilityProps){
    return(
        <div className={`flex ${abilities.length>2?'w-full':'w-1/2'} mx-auto justify-center items-stretch`}>
            {
                abilities?.map((ability:any)=>{
                    const id = ability.ability.url.substring(34, ability.ability.url.length-1)
                    return(
                        <Link href={`/ability/${id}`} key={ability.ability.name} className="hover:translate-x-1 border-none bg-purple-400 text-slate-800 p-3 rounded-lg mx-2 font-bold">
                            {ability.ability.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}