const getDescription=async(pokeName)=>{
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
    const data = await fetch(url).then(r=>r.json()).catch(error=>console.error(error))
    return data
}

export default getDescription