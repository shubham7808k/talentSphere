require('dotenv').config();

//impport express
const express = require('express');
const Userrouter = require('./routers/Userrouter');

//initialize express
const app = express();
const port = process.env.PORT || 5000;

//middleware
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
    console.log('Server is running on port');
});
