const setFavorite=async(poke, userId)=>{
  const {pokeId, pokeName, pokeTypes}=poke;

  const url="https://pokedex-react-native.onrender.com/poke";


  return await fetch(url,{
    method:"post",
    body:JSON.stringify({
      pokeId, pokeName, pokeTypes, userId
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