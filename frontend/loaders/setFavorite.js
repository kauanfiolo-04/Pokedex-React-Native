const setFavorite=async(poke)=>{
  const url="https://pokedex-react-native.onrender.com/";

  return await fetch(url,{
    method:"post",
    body:JSON.stringify(poke)
  }).then(r=>r.json()).catch(error=>console.error(error));
};

export default setFavorite;