const checkCredentials = async (email, password) => {
  // console.log(email, password)

  const url = "https://pokedex-react-native.onrender.com/user/checkCredentials";

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })
  }).then(r=>{
    return r.json();
  }).catch(err=>console.error('Error: '+err));
};

export default checkCredentials;