import { Router } from 'express';

const router = Router();

router.post('/poke/', async (req,res)=> {
  try{
    const poke = 'Criando...';

    return res.status(200).send(poke);
  }catch(error){
    console.error(error);
    return res.status(404);
  }
});

router.delete('/poke/:pokeId', async (req,res)=>{
  try{
    const poke=
    // await Poke.findOneAndDelete({pokeId:req.params.pokeId})
    'Deletando...';

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
  const pokes =
  // await Poke.find()
  'Searching all..';
  
  return res.status(200).send(pokes);
})

export default router;