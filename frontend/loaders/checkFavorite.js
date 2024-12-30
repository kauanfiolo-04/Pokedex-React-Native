const checkFavorite=async(pokeId)=>{
  const url=`https://pokedex-react-native-production.up.railway.app/getFavorited/${pokeId}`;

  return await fetch(url).then(r=>{
    if(r.status===200){
      return r===null ? null:r.json();
    }else{
      return 'vazio';
    }
  }).catch(err=>console.error('Error: '+err));
};

export default checkFavorite;