require('dotenv').config();

//impport express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Userrouter = require('./routers/UserRouter');

//initialize express
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use('/user', Userrouter);

//endpoint or route
app.get('/', (req, res) => {
    res.send('responde from express');
});

// /add
app.get('/add', (req, res) => {
    res.send('responde from add');
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
