const getFavorites=async()=>{
  const url="https://pokedex-react-native-production.up.railway.app/poke";

  return await fetch(url).then(r=>{
    if(r.status===200){
      return r.json();
    }else{
      return null;
    }
  }).catch(err=>console.error('Error: '+err));
};

export default getFavorites;