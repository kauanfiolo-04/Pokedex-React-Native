export const getPokemon= async (term)=>{
  const url=`https://pokeapi.co/api/v2/pokemon/${term}`
  
 /*  console.log('Fetching: '+url) */
  const data=await fetch(url).then(r=>r.json()).catch(error=>console.error(error))
  return data
}