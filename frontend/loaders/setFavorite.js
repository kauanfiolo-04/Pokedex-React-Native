const setFavorite=async(poke)=>{
  const {pokeId, pokeName, pokeTypes}=poke;
  console.log(JSON.stringify({
    pokeId, pokeName, pokeTypes
  }))
  const url="pokedex-react-native.railway.internal/poke";


  return await fetch(url,{
    method:"post",
    body:JSON.stringify({
      pokeId, pokeName, pokeTypes
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(r=>{
    if(r.status===201){
      return r.json();
    }else{
      return null;
    }
  }).catch(error=>console.error(error));
};

export default setFavorite;