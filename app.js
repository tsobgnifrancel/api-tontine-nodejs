import express from 'express';
import userRouter from './routes/user.route.js'
import connection from './database/db.js';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(express.json())


app.use('/api/user/', userRouter)

connection(process.env.MONGO_URI)
app.listen(5500, () => {
    console.log("Serveur démarrer avec succes")
})