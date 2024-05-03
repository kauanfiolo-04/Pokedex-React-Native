export const searchMenuBarLoader = async (term, signal)=>{
  const url=`https://pokeapi.co/api/v2/pokemon/${term}`

  return await fetch(url, {signal}).then(r=>{
    if(r.status===200){
      return r.json();
    }else{
      return 'vazio';
    }
  }).catch(err=>console.error('Error: '+err))
}