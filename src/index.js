import 'dotenv/config'

import express from 'express'
import connectDB from "./db/index.js"

const app = express()

connectDB();

/*
use iffy (()=>{})()
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is serve on ${process.env.PORT}`)
            })
        } catch (error) {
            console.log(error)
            throw err
        }
    })()

*/
