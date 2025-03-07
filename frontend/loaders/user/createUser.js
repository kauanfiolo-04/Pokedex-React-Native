const createUser = async (user) => {
  const url = "https://pokedex-react-native.onrender.com/user";

  return await fetch(url,{
    method:"POST",
    body:JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(r=>{
    if(r.status===201){
      return r.json();
    }else{
      throw new Error(r.message);
    }
  }).catch(error=>console.error(error));
};

export default createUser;