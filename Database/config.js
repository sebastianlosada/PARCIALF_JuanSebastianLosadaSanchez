const mongoose = require('mongoose');

const dbconnection = async() => {
    try{
        mongoose.connect(process.env.DB_CONNECTION,{
            autoIndex: true
        })
        console.log('DB Online')

    }catch(error){
        console.log(error)
        throw new Error('Error al conectar la DB');
    }
}

module.exports = {dbconnection}