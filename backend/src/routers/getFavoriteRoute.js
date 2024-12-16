import { Router } from 'express';

const router = Router();

router.get('/getFavorite/:pokeId',async (req,res)=>{
  try{
    const AlreadyExists= true;
    // await Poke.findOne({pokeId:req.params.pokeId})
    return res.status(200).send({AlreadyExists:AlreadyExists ? true : false});
  }catch(error){
    console.error(error);
    return res.status(404);
  }
})

export default router;