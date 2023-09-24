import Image from "next/image";
import PokeStats from "./PokeStats";
import PokeTypes from "./PokeTypes";

export default function PokeDetails({pokemon}:any){
    
    return(
        <div>
            <div className="flex">
                <Image
                    alt={pokemon.name + "img"}
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    width={200}
                    height={100}
                    className="p-4 mx-auto hover:animate-bounce delay-1000"
                />
                <Image
                    alt={pokemon.name + "img"}
                    src={pokemon.sprites.other['official-artwork'].front_shiny}
                    width={200}
                    height={100}
                    className="p-4 mx-auto hover:animate-bounce delay-1000"
                />
                
            </div>
            <div className="w-1/2 flex items-stretch mx-auto text-center p-4 px-6">
                <h3 className="font-semibold mx-2">Weight: {pokemon.weight}</h3>
                <h3 className="font-semibold mx-2">Height: {pokemon.height}</h3>
            </div>
            <div>
                <PokeTypes types={pokemon.types}/>
            </div>
            <div>
                <h2 className="text-xl text-center my-3">Stats</h2>
                <PokeStats stats={pokemon.stats}/>
            </div>
        </div>
    )
}   