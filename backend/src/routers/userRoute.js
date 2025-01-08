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
    const user = await userController.post({ username, email, password });
    return res.status(201).send(user);
  } catch (err) {
    console.error(err);
    return res.status(err.message.includes('Duplicate') ? 400 : 500).send({ message: err.message });
  }
});

router.get('/user', async (req, res) => {
  try {
    const users = await userController.getAll();
    
    return res.status(200).send(users);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ message: err.message });
  }
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  
  try {
    const user = await userController.getUser(userId);

    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
});

router.put('/user/:userId', async (req, res) => {
  const { userId } = req.params;

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
    const user = await userController.put({ username, email, password }, userId)
    console.log(user)

    return res.status(201).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message })
  }
});

router.post('/user/checkCredentials', async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ message: "Erro: propriedade 'email' necessária!" });
  }
  if(!password) {
    return res.status(400).send({ message: "Erro: propriedade 'password' necessária!" });
  }

  try {
    const checked = await userController.checkCredentials(email, password);
    return res.status(200).send(checked);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
});

export default router;