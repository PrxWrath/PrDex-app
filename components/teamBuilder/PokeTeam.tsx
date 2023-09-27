"use client"

import { useState, useEffect } from "react"
import { Input } from "../ui/input"
import PokeCard from "../PokeCard"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"


interface PokeTeamProps{
    pokemon:any
}

export default function PokeTeam({pokemon}:PokeTeamProps){
    const [team, setTeam] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [teamNames, setTeamNames] = useState("");
    
    //name list of pokemons in team
    useEffect(()=>{
        let names = "";
        team.forEach((mon:any)=>{
            if(team.length<=6){
                names += "|"+mon.name
            }
        })
        setTeamNames(names);
    },[team]);

    const filterList = (list:any) => {
        return list.filter((ele:any)=>ele.name.toLowerCase().includes(searchVal.toLowerCase()))
    }
    const filteredList = filterList(pokemon);
    
    const removeMon = (name:string) => {
        let index = team.findIndex((e:any)=>e.name == name);
        team.splice(index,1);
        setTeam([...team]);
        
    }

    return(
        <>
        <div className="grid p-3 my-1 lg:grid-cols-6 sm:grid-cols-3 gap-1" style={{width: '900px', height: '300px'}}>
            {team?.length<=0?
            <>
            <div className="border h-2/3 border-slate-400 shadow-lg shadow-slate-400 m-2 p-2 text-center justify-center flex-col">
                <h1 className="text-3xl">+</h1>
            </div>
            </>
            :
            <>
            {team?.map((mon:any)=>{
                
                return(
                    <div key={mon.name} className="border h-2/3 border-slate-400 shadow-lg shadow-slate-400 m-2 p-2 text-center justify-center flex-col">
                        <h2 className="text-lg">{mon.name}</h2>
                        <Image 
                        alt={`pokeImg + ${mon.name}`}
                        src={mon.sprites? mon.sprites.other['official-artwork'].front_default: mon.img_default}
                        width={60}
                        height={60}
                        className="mx-auto my-2"
                        />
                        <Button className="bg-red-400" onClick={()=>{removeMon(mon.name)}}>Remove</Button>
                    </div>
                )
            })}
            {team.length<6?
            <div className="border h-2/3 border-slate-400 shadow-lg shadow-slate-400 m-2 p-2 text-center justify-center flex-col">
                <h1 className="text-3xl">+</h1>   
            </div>:<></>}
            </>
            }
        <Link href={`/team/builder/${teamNames}`}><Button className="mx-auto">Configure Team</Button></Link>
        
        </div>
        <h2 className='text-3xl pt-10 py-2 text-center'> Search Pokemons </h2>
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
                    return (<PokeCard pokemon={pokemon} key={pokemon.name+"card"} img={true} team={true} setTeam={setTeam}/>)
                })}

            </div>
        </>
    )
}