const getPokemon= async (term)=>{
  const url=`https://pokeapi.co/api/v2/pokemon/${term}`;
  
 /*  console.log('Fetching: '+url) */
  return await fetch(url).then(r=>r.json()).catch(error=>console.error(error));
};

export default getPokemon;