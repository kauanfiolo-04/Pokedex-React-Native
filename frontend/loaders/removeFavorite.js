const removeFavorite=async(pokeId, userId)=>{
  const url=`https://pokedex-react-native.onrender.com/poke/${pokeId}`;

  return await fetch(url,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId })
  }).then(r=>{
    if(r.status===200){
      return r===null ? null:r.json();
    }else{
      return null;
    }
  }).catch(err=>console.error('Error: '+err));
};

export default removeFavorite;