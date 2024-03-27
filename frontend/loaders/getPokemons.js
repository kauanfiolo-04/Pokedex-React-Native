export const getPokemons=async(limit, offset)=>{
  const pokemons=await fetch(`/pokemon?limit=${limit}&offset=${offset}`)
    .then(r=>r.data.results).catch(err=>console.error(err)) ?? []
  const finalPokemons=[]

  for(const poke of pokemons){
    await getPokemon(poke.name).then(poke=>finalPokemons.push(poke))
  }
 
  return finalPokemons
}