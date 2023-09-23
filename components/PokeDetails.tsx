import Image from "next/image";

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
            <div>
                <h2 className="text-xl text-center my-3">Stats</h2>
                <li>HP: {pokemon.stats[0].base_stat}</li>
                <li>ATK: {pokemon.stats[1].base_stat}</li>
                <li>DEF: {pokemon.stats[2].base_stat}</li>
                <li>Spl. ATK: {pokemon.stats[3].base_stat}</li>
                <li>Spl. DEF: {pokemon.stats[4].base_stat}</li>
                <li>SPD: {pokemon.stats[5].base_stat}</li>

            </div>
        </div>
    )
}   