const getDescription=async(pokeName)=>{
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;

    return await fetch(url).then(r=>r.json()).catch(error=>console.error(error));
};

export default getDescription;