const removeFavorite=async(pokeId)=>{
  const url=`https://pokedex-react-native.railway.internal/poke/${pokeId}`;

  return await fetch(url,{method:"delete"}).then(r=>{
    if(r.status===200){
      return r===null ? null:r.json();
    }else{
      return null;
    }
  }).catch(err=>console.error('Error: '+err));
};

export default removeFavorite;