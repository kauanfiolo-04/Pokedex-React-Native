import { Router } from 'express';
import pokemonController from '../controllers/pokemonController.js';

const router = Router();

router.get('/getFavorited/:pokeId',async (req,res)=>{
  const { pokeId } = req.params;
  try{
    const alreadyExists = await pokemonController.getFavorited(pokeId);
    return res.status(200).send({ alreadyExists : alreadyExists ? true : false });
  }catch(error){
    console.error(error);
    return res.status(404).send(error.message);
  }
})

export default router;