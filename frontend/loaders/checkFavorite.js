const checkFavorite = async (pokeId, userId) => {
  const url=`https://pokedex-react-native.onrender.com/getFavorited/${userId}/${pokeId}`;

  return await fetch(url).then(r=>{
    if(r.status===200){
      return r.json();
    }else{
      throw new Error(r.message)
    }
  }).catch(err=>console.error('Error: '+err));
};

export default checkFavorite;