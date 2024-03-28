// require('dotenv').config()  /* It polluting the code consistancy */ 


import dotenv from "dotenv";
import connectDB from "./db/index.js"


// As early as possible in your application, import and configure dotenv.
// As soon as our application run then dotenv should available in all our files.
// So whatever first file we are loading, atleast we try in that files our environment 
// vairables load.



dotenv.config({
    path: './env'
})



connectDB()










/*
import express from "express";
const app = express()


;( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", () => {
        console.log("Error: ", error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT} `);
    })
    
    } catch (error) {
        console.log("ERROR", error);
        throw error
    }
})
*/