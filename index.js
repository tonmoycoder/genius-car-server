const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// middle wares

app.use(cors());
app.use(express.json())


const uri = "mongodb+srv://<username>:<password>@cluster0.vtstx9a.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const serviceCollection = client.db('geniusCar').collection('services');
    }
    finally{

    }
}

run().catch(err=> console.error(err))

console.log(process.env.DB_NAME,process.env.DB_PASS)


app.get('/' , (req, res) => {
    res.send('car server running')
})

app.listen(port , ()=>{
    console.log(`genius car server running on port ${port}`);
})