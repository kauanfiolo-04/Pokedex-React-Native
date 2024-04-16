import {config} from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const app=express()
const port=3000
config()

mongoose.connect(process.env.MONGODB_URI)

const Poke = mongoose.model('Poke',{
  pokeId:String,
  pokeName:String,
  pokeTypes:Array.of(String)
})

app.post('/', async(req,res)=>{
  const body=req.body
  
  const poke = new Poke({
    pokeId:body.pokeId,
    pokeName:body.pokeName,
    pokeTypes:body.pokeTypes
  })

  await poke.save()

  res.send(poke)
})

app.get('/', (req, res)=>{
  res.send('Hello Word')
})

app.listen(port, ()=>{
  console.log(`App Running in port...${port}`)
})

