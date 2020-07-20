//This is the connection file for the database---mongodb
//we import mongoose, which is used to connect to mongodb, it creates an abstraction as well
const mongoose = require('mongoose')
//importing config module, which helps in getting global variables from other files
const config = require('config')

const db = config.get('mongoURI')

//setting up the connection
//normally mongoose.connect() gives a promise , but here we are using 'async-await'
const connectDB = async() => {
    try{
        await mongoose
        .connect(db, {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        //Ensuring the connection to the database was succesful
        console.log("MongoDB  Connected....")
    }catch(err){
        console.error(err.message)
        //Exit from the process
        process.exit(1)
    }
}

//finally exporting the connection constant
module.exports = connectDB