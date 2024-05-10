const removeFavorite=async(id)=>{
  const url=`https://pokedex-react-native.onrender.com/${id}`;

  return await fetch(url,{method:"delete"}).then(r=>{
    if(r.status===200){
      return r===null ? null:r.json();
    }else{
      return null;
    }
  }).catch(err=>console.error('Error: '+err));
};

export default removeFavorite;