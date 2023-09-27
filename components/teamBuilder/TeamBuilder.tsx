"use client"
import Image from "next/image";
import PokeStats from "../PokeStats";
import PokeTypes from "../PokeTypes";
import PokeMoves from "../PokeMoves";
import PokeAbilities from "../PokeAbilities";
import { Button } from "../ui/button";
import {useState} from 'react';
import Link from "next/link";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";

interface TeamBuilderProps{
    pokemonList:any,
    teamStore:any
}
export default function TeamBuilder({pokemonList, teamStore}:TeamBuilderProps){
    const [currentMon, setCurrentMon] = useState(pokemonList[0]);
    
    const currentSelection = (name:string)=>{
        let mon = pokemonList.find((mon:any)=>mon.name==name);
        setCurrentMon(mon);
    }
    return(
        <div>
            <div className="grid p-3 my-1 lg:grid-cols-6 sm:grid-cols-3 gap-1" style={{width: '900px', height: '280px'}}>

            {pokemonList?.map((mon:any)=>{
                
                return(
                    <div onClick={()=>{currentSelection(mon.name)}} key={mon.name} className=" hover:translate-x-1 cursor-pointer border h-2/3  border-slate-400 shadow-lg shadow-slate-400 m-2 p-2 text-center justify-center flex-col">
                        <h2 className="text-lg">{mon.name}</h2>
                        <Image 
                        alt={`pokeImg + ${mon.name}`}
                        src={mon.sprites? mon.sprites.other['official-artwork'].front_default: mon.img_default}
                        width={65}
                        height={65}
                        className="mx-auto my-2"
                        />
                    </div>
                )
            })}
            <Link href={`/team`} className="mx-auto"><Button>Back to Team</Button></Link>
                
            </div>
            <div>
                <PokeTypes types={currentMon.types}/>
            </div>
            {/* Move and abilities selectors */}
            <div className="my-2 flex w-full justify-center">
                <div>
                    <h2 className="my-1 text-xl">Select Ability</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="Select ability"/>
                </div>
                <datalist id="Select ability">
                {
                        currentMon.abilities.map((ability:any)=>{
                            return(
                                <option key={ability.ability.name} value={ability.ability.name}>{ability.ability.name}</option>
                            )
                        })
                        
                } 
                </datalist>
                <div>
                    <h2 className="my-1 text-xl">Select Moves</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="Select ability"/>
                </div>
                <datalist id="Select Moves">
                {
                        currentMon.abilities.map((ability:any)=>{
                            return(
                                <option key={ability.ability.name} value={ability.ability.name}>{ability.ability.name}</option>
                            )
                        })
                        
                } 
                </datalist>            
            </div>
            <div className="flex mx-3">
            
                <Image
                    alt={`pokeImg + ${currentMon.name}`}
                    src={currentMon.sprites? currentMon.sprites.other['official-artwork'].front_default: currentMon.img_default}
                    width={300}
                    height={80}
                />
                <div className="my-2">
                    <h2 className="text-xl text-center my-3 mb-1 font-semibold">Stats</h2>
                    <PokeStats stats={currentMon.stats}/>
                </div>
            
            </div>
            
        </div>
    )
}   