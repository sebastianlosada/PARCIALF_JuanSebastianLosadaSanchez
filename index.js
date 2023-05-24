const express = require('express')
require('dotenv').config()
const { dbconnection } = require('./Database/config');
const cors = require('cors')

// Crear Express App
const app = express();

// Iniciar DB
dbconnection();

//CORS
app.use(cors())
app.use(express.static('public'))

app.use(express.json());

app.use('/api/auth', require('./Routes/auth'))


app.listen(process.env.PORT, () => {
    console.log('Se esta ejecutando en el puerto', process.env.PORT)
})

