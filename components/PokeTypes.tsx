import Image from "next/image"
import { Types } from "@/lib/pokeTypes"

interface PokeTypeProps{
    types: any
}

export default function PokeTypes({types}:PokeTypeProps) {
    
    return(

        <div className={`flex ${types.length>1? 'w-1/2':'w-1/6'} justify-center mx-auto items-center text-center`}>
            {types?.map((type:any)=>{
                return(
                <div key={type} className="p-2 w-20 mx-1 rounded-lg border border-slate-400 hover:translate-y-1">
                    <Image
                        alt="poketype"
                        key={type}
                        src={Types[`${type.type.name}`]}
                        width={50}
                        height={50}
                        className="p-2 m-2 rounded-full"
                    />
                    <h3>{type.type.name}</h3>
                </div>)
            })}
        </div>
    )

}