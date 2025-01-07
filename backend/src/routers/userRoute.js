import { Router } from 'express';
import userController from '../controllers/userController.js'

const router = Router();

router.post('/user', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res.status(400).send({ message: "Erro: propriedade 'username' necessária!" });
  }
  if (!email) {
    return res.status(400).send({ message: "Erro: propriedade 'email' necessária!" });
  }
  if(!password) {
    return res.status(400).send({ message: "Erro: propriedade 'password' necessária!" });
  }

  try {
    // const alreadyExists = await pokemonController.getFavorited(userId);
    // if (alreadyExists) {
    //     return res.status(409).send({ message: "Erro: Pokémon já existe!" });
    // }

    const user = await userController.post({ username, email, password });
    return res.status(201).send(user);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});

router.get('/user', async (req, res)=>{
  try {
    const users = await userController.getAll();
    
    return res.status(200).send(users);
  } catch (err) {
    return res.send(400).send({ message: err.message });
  }
})

export default router;