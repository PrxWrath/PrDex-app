"use client"
import Image from "next/image";
import PokeStats from "../PokeStats";
import PokeTypes from "../PokeTypes";
import PokeMoves from "../PokeMoves";
import PokeAbilities from "../PokeAbilities";
import { Button } from "../ui/button";
import {useEffect, useState} from 'react';
import Link from "next/link";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select";

interface TeamBuilderProps{
    pokemonList:any,
    teamStore:any
}
export default function TeamBuilder({pokemonList, teamStore}:TeamBuilderProps){
    const [currentMon, setCurrentMon] = useState(pokemonList[0]);
    const [monObj, setMonObj] = useState([]);
    const [ability, setAbility] = useState("");
    const [move1, setMove1] = useState("");
    const [move2, setMove2] = useState("");
    const [move3, setMove3] = useState("");
    const [move4, setMove4] = useState("");

    //update single pokemon when all moves are set
    useEffect(()=>{
        if(move1.length>=3 && move2.length>=3 && move3.length>=3 && move4.length>=3){
            // initialize pokemon object
            let newMon:any = {
                name: currentMon.name,
                ability,
                moves: [move1, move2, move3, move4]
            }
            let updateMon:any = [...monObj, newMon]
            setMonObj(updateMon);
            setAbility("");
            setMove1("");
            setMove2("");
            setMove3("");
            setMove4("");
        }
    }, [move1, move2, move3, move4, ability, currentMon])

    const currentSelection = (name:string)=>{
        let mon = pokemonList.find((mon:any)=>mon.name==name);
        setCurrentMon(mon);
        setAbility("");
        setMove1("");
        setMove2("");
        setMove3("");
        setMove4("");
    }

    const updateCurrentAbility = (name: string) => {
        setAbility(name)
    }
    {console.log(monObj)}
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
            <div className="my-2 flex w-full justify-between">
                <div>
                    <h2 className="my-1 text-xl">Select Ability</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="Select ability" onChange={(e)=>{updateCurrentAbility(e.currentTarget.value)}}/>
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
                
                <div className="flex-col">
                <div>
                    <h2 className="my-1 text-xl">Select Move 1</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="SelectMove1" onChange={(e)=>{setMove1(e.currentTarget.value)}}/>
                </div>
                <datalist id="SelectMove1">
                {
                        currentMon.moves.map((move:any)=>{
                            return(
                                <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
                            )
                        })
                        
                } 
                </datalist>
                <div>
                    <h2 className="my-1 text-xl">Select Move 2</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="SelectMove2" onChange={(e)=>{setMove2(e.currentTarget.value)}}/>
                </div>
                <datalist id="SelectMove2">
                {
                        currentMon.moves.map((move:any)=>{
                            return(
                                <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
                            )
                        })
                        
                } 
                </datalist>
                <div>
                    <h2 className="my-1 text-xl">Select Move 3</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="SelectMove3" onChange={(e)=>{setMove3(e.currentTarget.value)}}/>
                </div>
                <datalist id="SelectMove3">
                {
                        currentMon.moves.map((move:any)=>{
                            return(
                                <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
                            )
                        })
                        
                } 
                </datalist>   
                <div>
                    <h2 className="my-1 text-xl">Select Move 4</h2>
                    <input className='mx-2 bg-transparent border border-slate-400 p-1 rounded-lg' list="SelectMove4" onChange={(e)=>{setMove4(e.currentTarget.value)}}/>
                </div>
                <datalist id="SelectMove4">
                {
                        currentMon.moves.map((move:any)=>{
                            return(
                                <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
                            )
                        })
                        
                } 
                </datalist>
                </div> 
                <div className="max-h-50 flex-col w-1/2 p-2 overflow-y-scroll">
                    <h2 className="text-xl">Your team setup:</h2>
                    {monObj.map((mon:any)=>{
                        return(
                            <div key={mon} className="my-2">
                                <h2 className="text-lg underline my-2">{mon.name.toUpperCase()}</h2>
                                <h3>Ability : {mon.ability}</h3>
                                <h3>Moves: {mon.moves.map((move:any)=> {return(<h3 key={move}>| {move} |</h3>)})}</h3>
                            </div>
                        )
                    })}
                </div>        
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