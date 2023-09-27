import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface PokeCardProps {
    pokemon: any,
    key: string,
    img: boolean,
    team: boolean,
    setTeam:any
}
export default function PokeCard({pokemon, key, img, team, setTeam}: PokeCardProps) {
    
    return (
        <div key={key} className="group rounded-md border dark:border-slate-400 px-5 py-4 transition-colors hover:bg-slate-800/50 flex-col justify-center ">
        <Link 
            href={`/${pokemon.name}`}
        >   <div className="hover:shadow-yellow-400 shadow-md flex-col justify-center">
                <h2>{pokemon.name}</h2>
                {img&&
                    <Image 
                    alt={`pokeImg + ${pokemon.name}`}
                    src={pokemon.sprites? pokemon.sprites.other['official-artwork'].front_default: pokemon.img_default}
                    width={30}
                    height={30}
                    className="mx-auto my-2"
                    loading="lazy"
                    />
                }
            </div>
            
        </Link>
        {team&& 
            <Button className=" hover:translate-y-1" onClick={()=>{
                setTeam((prev:any) => [...prev, pokemon])
            }}>Add to team</Button>
        }
        </div>
    )
}