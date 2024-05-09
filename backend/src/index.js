import {config} from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app=express()
app.use(express.json())
const port=3000
config()


const Poke = mongoose.model('Poke',{
  pokeId:String,
  pokeName:String,
  pokeTypes:Array.of(String)
})

const postCallback=async(req,res)=>{
  const body=req.body
  
  const poke = new Poke({
    pokeId:body.pokeId,
    pokeName:body.pokeName,
    pokeTypes:body.pokeTypes
  })

  const AlreadyExists=await Poke.findOne({pokeId:body.pokeId})
  
  if(!AlreadyExists){
    await poke.save()
  }
  
  return res.send(poke)
}

app.post('/', async (req,res)=> await postCallback(req,res))

app.delete('/:pokeId', async (req,res)=>{
  try{
    const poke=await Poke.findOneAndDelete({pokeId:req.params.pokeId})
    return res.send(poke)
  }catch(error){
    console.error(error)
    return res.sendStatus(404)
  }
})

app.put('/:pokeId', async (req,res)=>{
  try{
    const pokeUpdated={}
    const body=req.body

    body.pokeId && (pokeUpdated[pokeId]=body.pokeId)
    body.pokeName && (pokeUpdated[pokeName]=body.pokeName)
    body.pokeTypes && (pokeUpdated[pokeTypes]=body.pokeTypes)

    const poke=await Poke.findOneAndReplace({pokeId:req.params.pokeId}, pokeUpdated)
    return res.send(poke)
  }catch(error){
    console.error(error)
    return res.sendStatus(404)
  }
})

app.get('/', async (req, res)=>{
  const pokes= await Poke.find()
  return res.send(pokes)
})

app.get('/getFavorite/:pokeId',async (req,res)=>{
  try{
    const AlreadyExists=await Poke.findOne({pokeId:req.params.pokeId})

    return res.send({AlreadyExists})
  }catch(error){
    console.error(error)
    return res.sendStatus(404)
  }
})

app.listen(port, ()=>{
  mongoose.connect(process.env.MONGODB_URI)
  console.log(`App Running in port...${port}`)
})

