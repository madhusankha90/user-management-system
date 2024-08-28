const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();



const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const URI = 'mongodb://localhost:27017/projectOne'

const connect = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected");
        
    } catch (error) {
        console.log("MongoDB not connected",error);
        
    }
    
}
connect();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})