import { Progress } from "./ui/progress";

interface PokeStatsProps{
    stats: any
}

export default function PokeStats({stats}:PokeStatsProps){
    let total = 0;
    stats?.forEach((stat:any)=> {
        total+=stat.base_stat
    });

    return (
        <div className="p-2 mx-auto" style={{width: '500px'}}>
            
            <ul className="list-none flex-col">
                <h2 className="text-center my-4 font-semibold text-yellow-500">Base Stat Total: {total}</h2>
                {stats?.map((stat:any)=> {
                    const name = stat.stat.name;
                    const val = stat.base_stat;
                    return(
                        <li className="flex items-stretch hover:translate-x-1" key={name}>
                            <h3 className="p-2 w-1/2">{name}: {val}</h3>
                            <Progress className="w-2/3 my-2" value={(val/2)}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}