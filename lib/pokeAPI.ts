import fs from "fs";
import path, { dirname } from "path";

//get list of pokemon
export async function getPokeList() {
  const res = await fetch(
    "http://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"
  );
  const data = await res.json();
  return data.results;
}

//get pokemon details for home page
export async function getPokeDataGrid(name: string) {
  let filePath = path.join("./lib/", `pokemons/${name}.json`);
  let data = null;

  try {
    let file = fs.readFileSync(filePath, "utf-8");
    let data = JSON.parse(file);
    if (data) {
      return data;
    } else {
      const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${name}`);
      data = await res.json();
      let dataToStore = {
        name: data.name,
        img_default: data.sprites.other["official-artwork"].front_default,
        img_shiny: data.sprites.other["official-artwork"].front_shiny,
        url: `https://pokeapi.co/api/v2/pokemon/${data.name}`,
      };
      //store image sprites
      fs.writeFileSync(filePath, JSON.stringify(dataToStore, null, 2));
      return data;
    }
  } catch (err) {
    const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${name}`);
    data = await res.json();
    let dataToStore = {
      name: data.name,
      img_default: data.sprites.other["official-artwork"].front_default,
      img_shiny: data.sprites.other["official-artwork"].front_shiny,
      url: `https://pokeapi.co/api/v2/pokemon/${data.name}`,
    };
    //store image sprites
    fs.writeFileSync(filePath, JSON.stringify(dataToStore, null, 2));
    return data;
  }
}

//get specific pokemon details
export async function getPokeData(name: string) {
  const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${name}`);
  let data = await res.json();
  return data;
}

//get ability details
export async function getAbilityData(id: number) {
  const res = await fetch(`http://pokeapi.co/api/v2/ability/${id}/`);
  const data = await res.json();
  return data;
}

//get move details
export async function getMoveData(id: number) {
  const res = await fetch(`http://pokeapi.co/api/v2/move/${id}/`);
  const data = await res.json();
  return data;
}
