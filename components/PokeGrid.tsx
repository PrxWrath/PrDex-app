"use client"
import {useState} from 'react';
import { Input } from './ui/input';
import PokeCard from './PokeCard';

interface PokeGridProps {
    pokemonList:any,
    team: boolean,
    setTeam: any
}

export default function PokeGrid({pokemonList, team, setTeam}:PokeGridProps){
    const [searchVal, setSearchVal] = useState("");
    
    const filterList = (list:any) => {
        return list.filter((ele:any)=>ele.name.toLowerCase().includes(searchVal.toLowerCase()))
    }
    const filteredList = filterList(pokemonList);

    return(
        <> 
            <h2 className='text-3xl pt-10 py-4 text-center'> Search Pokemons </h2>
            <div className='w-80 mx-auto text-center'>
                <Input
                    type='text'
                    value={searchVal}
                    placeholder='Charizard, Garchomp, etc.'
                    autoComplete='off'
                    id='pokeName'
                    onChange={(e)=>{setSearchVal(e.target.value)}}
                    className='bg-slate-400/30'
                ></Input>
            </div>
            <h2 className='text-2xl pt-10 py-4 text-center'>-- Explore --</h2>
            <div className='max-h-80 overflow-y-scroll p-3 grid text-center lg:grid-cols-4 sm:grid-cols-3 gap-1.5'>
                {filteredList?.map((pokemon:any)=>{
                    return (<PokeCard pokemon={pokemon} key={pokemon.name+"card"} img={true} team={team} setTeam={setTeam}/>)
                })}

            </div>
        </>
    )
}