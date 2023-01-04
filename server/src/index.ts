import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { config } from "dotenv"
import { createRaceContoller } from './controllers/Routes/Race/createRaceController'
import { getRacesController } from './controllers/Routes/Race/getRacesController'
import { createAccountController } from './controllers/Routes/Account/createAccountController';
import { getAccountController } from './controllers/Routes/Account/getAccountController';
import { getLoginController } from './controllers/Routes/Login/getLoginController'
import { createSignUpController } from './controllers/Routes/Signup/createSignUpController'
import cors from 'cors';

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

app.post("/", createRaceContoller)

app.get("/account", getAccountController)

app.post("/account", createAccountController)

app.post("/signup", createSignUpController)

app.post("/login", getLoginController)

/* app.post("/login", createLoginController) */




