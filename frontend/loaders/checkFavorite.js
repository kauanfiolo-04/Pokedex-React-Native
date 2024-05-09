const checkFavorite=async(id)=>{
  const url=`https://pokedex-react-native.onrender.com/getFavorite/${id}`;

  return await fetch(url).then(r=>{
    if(r.status===200){
      return r===null ? null:r.json();
    }else{
      return 'vazio';
    }
  }).catch(err=>console.error('Error: '+err));
};

export default checkFavorite;