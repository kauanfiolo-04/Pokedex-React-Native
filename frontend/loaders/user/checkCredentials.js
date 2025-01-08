const checkCredentials = async (email, password) => {
  const url = "http://localhost:3000/user/checkCredentials";

  return await fetch(url, {
    method: "post",
    body: JSON.stringify({ email, password })
  }).then(r=>{
    return r.json();
  }).catch(err=>console.error('Error: '+err));
};

export default checkCredentials;