import { Router } from 'express';
import pokemonController from '../controllers/pokemonController.js';

const router = Router();

router.post('/poke', async (req,res)=> {
  const { pokeId, pokeName, pokeTypes } = req.body;

  if (!pokeId) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" });
  }
  if (!pokeName) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" });
  }
  if (!pokeTypes) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeTypes' necessária!" });
  }

  try {
    const alreadyExists = await pokemonController.getFavorited(pokeId);
    if (alreadyExists) {
      return res.status(409).send({ message: "Erro: Pokémon já existe!" })
    }

    const poke = await pokemonController.post({pokeId, pokeName, pokeTypes});
    return res.status(201).send(poke);
  } catch (error) {
    console.error(error)
    return res.sendStatus(500).send(error.message);
  }
});

router.delete('/poke/:pokeId', async (req,res)=>{
  try{
    const poke = await pokemonController.delete(req.params.pokeId);

    return res.status(200).send(poke);
  }catch(error){
    console.error(error);
    return res.status(404).send(error.message);
  }
})

router.put('/poke/:pokeId', async (req, res) => {
  try {
    const { pokeId } = req.params;
    const { pokeName, pokeTypes } = req.body;

    if (!pokeId) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" });
    }
    if (!pokeName) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" });
    }
    if (!pokeTypes) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeTypes' necessária!" });
    }

    const updatedPoke = await pokemonController.put({ pokeId, pokeName, pokeTypes });

    if (!updatedPoke.updated) {
      return res.status(404).send({ message: "Pokémon não encontrado para atualizar." });
    }

    return res.status(200).send({ 
      message: "Pokémon atualizado com sucesso!", 
      data: updatedPoke 
    });
  } catch (error) {
    console.error('Erro ao atualizar Pokémon:', error);
    return res.status(500).send({ message: "Erro interno no servidor", error: error.message });
  }
});

router.get('/poke', async (req, res)=>{
  try {
    const pokes = await pokemonController.getAll();
    
    return res.status(200).send(pokes);
  } catch (err) {
    return res.send(400).send(err.message);
  }
  
})

export default router;