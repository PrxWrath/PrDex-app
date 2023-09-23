import PokeDetails from "../../components/PokeDetails";
import { getPokeData } from "@/lib/pokeAPI";

interface PokemonDataProps{
    params: {
        pokeName:string
    }
}
export default async function PokemonData({params}: PokemonDataProps){
    const {pokeName} = params;
    const pokeDat = await getPokeData(pokeName);
    return(
        <div>
            <h2 className="text-center p-2 mt-7 text-2xl">{pokeName.toUpperCase()}</h2>
            <PokeDetails pokemon={pokeDat}/>
        </div>
    )
} 