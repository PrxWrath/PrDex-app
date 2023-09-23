
//get list of pokemon
export async function getPokeList(){
    const res = await fetch('http://pokeapi.co/api/v2/pokemon?limit=500&offset=0');
    const data = await res.json();
    return data.results
}

//get specific pokemon details
export async function getPokeData(name:string) {
    const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
}
