import AbilityDetailPanel from "@/components/AbilityDetails";
import { getAbilityData } from "@/lib/pokeAPI";

interface AbilityDetailsProps{
    params: {
        id:number
    }
}
export default async function AbilityDetails({params}:AbilityDetailsProps){
    const {id} = params;
    const ability = await getAbilityData(id);
    return (
        <div>
            <AbilityDetailPanel ability={ability}/>
        </div>
    )
}