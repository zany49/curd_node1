import express from 'express';
import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
import cors from 'cors';
import { getAllCribs, addcribs, deleteCribs, updateCribs } from './helper.js';

const app = express();


app.use(express.json());
dotenv.config();
app.use(cors());


const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;


export async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    return client;
}

app.get('/', (req,res) => {
    res.send("hello world");
})

app.get('/cribs',async(req,res)=>{
    
    const user = await getAllCribs();
     res.send(user);
  })

  app.post('/cribs',async(req,res)=>{
    const cribs = req.body;
  const result = await addcribs(cribs);
   res.send(result);
})

app.delete('/cribs/:id',async (req,res)=>{

    const {id} = req.params;
    const result = await deleteCribs(id);
    console.log(result);
    res.send(result);


});

app.put('/cribs/:id',async (req,res)=>{
    const {id} = req.params;
    const updatedCribs = req.body;
    const result = await updateCribs(id,updatedCribs);
    res.send(result);

})

app.listen(PORT, () => console.log('the server is started',PORT));



