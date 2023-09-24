import Link from "next/link"

interface PokeMoveProps{
    moves:any
}

export default function PokeMoves({moves}:PokeMoveProps){
    return(
            <ul className='list-none max-h-60 overflow-y-scroll p-3 grid text-center lg:grid-cols-4 sm:grid-cols-3 gap-1.5'>
                {moves?.map((move:any)=>{
                    const id = move.move.url.substring(31, move.move.url.length-1)
                    return (
                    <Link href={`/move/${id}`} className={`hover:translate-x-1 border ${move.version_group_details[0].level_learned_at!=0? 'border-purple-500  text-purple-500': 'border-slate-400'}  rounded-lg`} key={move.move.name}>
                        <h3>{`${move.move.name} lv(${move.version_group_details[0].level_learned_at})`}</h3>
                    </Link>)
                })}

            </ul>            
    )
}