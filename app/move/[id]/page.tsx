import MoveDetailPanel from "@/components/MoveDetails";
import { getMoveData } from "@/lib/pokeAPI";

interface MoveDetailsProps{
    params: {
        id:number
    }
}
export default async function MoveDetails({params}:MoveDetailsProps){
    const {id} = params;
    const move = await getMoveData(id);
    return (
        <div>
            <MoveDetailPanel move={move}/>
        </div>
    )
}