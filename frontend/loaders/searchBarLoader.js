export const searchMenuBarLoader = async (term, signal)=>{
  const url=`https://pokeapi.co/api/v2/pokemon/${term}`

  return await fetch(url, {signal}).catch(err=>console.error('Error: '+err))
}