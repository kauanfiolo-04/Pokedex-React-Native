import { Router } from 'express';
import pokemonController from '../controllers/pokemonController.js';

const router = Router();

router.post('/poke', async (req,res)=> {
  const { pokeId, pokeName, pokeTypes, userId } = req.body;

  if (!pokeId) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" });
  }
  if (!pokeName) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" });
  }
  if (!pokeTypes) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeTypes' necessária!" });
  }
  if(!userId) {
    return res.status(400).send({ message: "Erro: propriedade 'userId' necessária!" });
  }

  try {
    const alreadyExists = await pokemonController.getFavorited(pokeId, userId);
    if (alreadyExists) {
        return res.status(409).send({ message: "Erro: Pokémon já existe!" });
    }

    const poke = await pokemonController.post({ pokeId, pokeName, pokeTypes }, userId);
    return res.status(201).send(poke);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

router.delete('/poke/:pokeId', async (req,res)=>{
  const { userId } = req.body; 

  console.log(req.body)

  if(!userId) {
    return res.status(400).send({ message: "Erro: propriedade 'userId' necessária!" });
  }

  try{
    const poke = await pokemonController.delete(req.params.pokeId, userId);

    return res.status(200).send(poke);
  }catch(error){
    console.error(error);
    return res.status(404).send({ message: error.message });
  }
})

router.put('/poke/:pokeId', async (req, res) => {
  try {
    const { pokeId } = req.params;
    const { pokeName, pokeTypes, userId } = req.body;

    if (!pokeId) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" });
    }
    if (!pokeName) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" });
    }
    if (!pokeTypes) {
      return res.status(400).send({ message: "Erro: propriedade 'pokeTypes' necessária!" });
    }

    const updatedPoke = await pokemonController.put({ pokeId, pokeName, pokeTypes }, userId);

    if (!updatedPoke.updated) {
      return res.status(404).send({ message: "Pokémon não encontrado para atualizar." });
    }

    return res.status(200).send({ 
      message: "Pokémon atualizado com sucesso!", 
      data: updatedPoke 
    });
  } catch (error) {
    console.error('Erro ao atualizar Pokémon:', error);
    return res.status(500).send({ message: error });
  }
});

router.get('/poke/:userId', async (req, res)=>{
  const { userId } = req.params;

  try {
    const pokes = await pokemonController.getAll(userId);
    
    return res.status(200).send(pokes);
  } catch (err) {
    return res.send(400).send({ message: err.message });
  }
})

export default router;