import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { config } from "dotenv"
import { createRaceContoller } from './controllers/Routes/Race/createRaceController'
import { getRacesController } from './controllers/Routes/Race/getRacesController'
import { getUserController } from './controllers/Routes/getUserController'
import { getLoginController } from './controllers/Routes/Login/getLoginController'
import { createSignUpController } from './controllers/Routes/Signup/createSignUpController'
import cors from 'cors';
import { updateUser } from './controllers/Routes/updateUser'

config()

const PORT = 5000;
const FRONTEND = 5173;

mongoose.connect(
  process.env.MONGO_URL!
).then(() => {
  console.log("Succssefully connected to database")
  app.listen(PORT)
})

const app = express()


// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin : `http://localhost:${FRONTEND}` ,
  credentials: true, // <= Accept credentials (cookies) sent by the client
}))

app.get("/", getRacesController)

app.get("/user", getUserController)

app.post("/", createRaceContoller)

app.post("/signup", createSignUpController)

app.post("/login", getLoginController)

app.put('/update-user/:id', updateUser);




