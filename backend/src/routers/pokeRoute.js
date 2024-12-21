import { Router } from 'express';
import pokemonController from '../controllers/pokemonController.js';

const router = Router();

router.post('/poke/', async (req,res)=> {
  const { pokeId, pokeName, pokeTypes } = req.body

  if (!pokeId) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" })
  }
  if (!pokeName) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" })
  }
  if (!pokeTypes) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeTypes' necessária!" })
  }

  try {
    const alreadyExists = await pokemonController.getFavorited();
    if (alreadyExists) {
      return res.status(409).send({ message: "Erro: Pokémon já existe!" })
    }

    const poke = await pokemonController.criar();
    return res.status(201).send(poke);
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
});

router.delete('/poke/:pokeId', async (req,res)=>{
  try{
    const poke = await pokemonController.delete(req.params.pokeId);

    return res.status(200).send(poke);
  }catch(error){
    console.error(error);
    return res.status(404);
  }
})

router.put('/poke/:pokeId', async (req,res)=>{
  try{
    const body=req.body

    const newPoke={}

    body.pokeId ? (newPoke.pokeId = body.pokeId) : res.status(400).send({
      message:`Erro: propriedade "pokeId" necessária!`
    })
    body.pokeName ? (newPoke.pokeName = body.pokeName) : res.status(400).send({
      message:`Erro: propriedade "pokeName" necessária!`
    })
    body.pokeTypes ? (newPoke.pokeTypes = body.pokeTypes) : res.status(400).send({
      message:`Erro: propriedade "pokeType" necessária!`
    })

    const poke=
    // await Poke.findOneAndReplace({pokeId:req.params.pokeId}, newPoke)
    `atualizando o poke: ${JSON.stringify(newPoke)}`;

    return res.status(200).send(poke);
  }catch(error){
    console.error(error);
    return res.status(404);
  }
})

router.get('/poke/', async (req, res)=>{
  const pokes = await pokemonController.getAll();
  
  return res.status(200).send(pokes);
})

export default router;