import {config} from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app=express()

app.use(express.json())

app.use(cors({
  origin: '*',  // Permite todas as origens
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const port=3000

config()

const Poke = mongoose.model('Poke',{
  pokeId:String,
  pokeName:String,
  pokeTypes:Array.of(String)
})


const postCallback = async (req, res) => {
  const { pokeId, pokeName, pokeType } = req.body
 
  if (!pokeId) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeId' necessária!" })
  }
  if (!pokeName) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeName' necessária!" })
  }
  if (!pokeType) {
    return res.status(400).send({ message: "Erro: propriedade 'pokeType' necessária!" })
  }

  const poke = new Poke({
    pokeId,
    pokeName,
    pokeTypes: pokeType
  })

  try {
    const alreadyExists = await Poke.findOne({ pokeId })
    if (alreadyExists) {
      return res.status(409).send({ message: "Erro: Pokémon já existe!" })
    }

    await poke.save()
    return res.status(201).send(poke)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

app.post('/', async (req,res)=> await postCallback(req,res))

app.delete('/:pokeId', async (req,res)=>{
  try{
    const poke=await Poke.findOneAndDelete({pokeId:req.params.pokeId})
    
    return res.status(200).send(poke)
  }catch(error){
    console.error(error)
    return res.status(404)
  }
})

app.put('/:pokeId', async (req,res)=>{
  try{
    const body=req.body

    const newPoke={}

    body.pokeId ? (newPoke.pokeId = body.pokeId) : res.status(400).send({
      message:`Erro: propriedade "pokeId" necessária!`
    })
    body.pokeName ? (newPoke.pokeName = body.pokeName) : res.status(400).send({
      message:`Erro: propriedade "pokeName" necessária!`
    })
    body.pokeType ? (newPoke.pokeType = body.pokeType) : res.status(400).send({
      message:`Erro: propriedade "pokeType" necessária!`
    })

    const poke=await Poke.findOneAndReplace({pokeId:req.params.pokeId}, newPoke)

    return res.status(200).send(poke)
  }catch(error){
    console.error(error)
    return res.status(404)
  }
})

app.get('/', async (req, res)=>{
  const pokes= await Poke.find()
  return res.status(200).send(pokes)
})

app.get('/getFavorite/:pokeId',async (req,res)=>{
  try{
    const AlreadyExists=await Poke.findOne({pokeId:req.params.pokeId})
    console.log(AlreadyExists)
    return res.status(200).send({AlreadyExists:AlreadyExists ? true : false})
  }catch(error){
    console.error(error)
    return res.status(404)
  }
})

app.listen(port, ()=>{
  mongoose.connect(process.env.MONGODB_URI)
  console.log(`App Running in port...${port}`)
})

