import { getPokemon } from "./getPokemon"

export const getPokemons=async(limit, offset)=>{
  const url=`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  console.log('Fetching:'+ url)
  const pokemons=await fetch(url)
    .then(r=>r.json()).then(data=>data.results).catch(err=>console.error(err)) ?? []
    // console.log(pokemons)
  const finalPokemons=[]

  for(const poke of pokemons){
    await getPokemon(poke.name).then(poke=>finalPokemons.push(poke))
  }
 
  return finalPokemons
}