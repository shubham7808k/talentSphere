require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL

//asynchronous funstion 
mongoose.connect(url)

.then((result) => {
    console.log('Connected to database');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;