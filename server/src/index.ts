import express from 'express'
import mongoose from 'mongoose'
import { config } from "dotenv"
import { createRaceContoller } from './controllers/Routes/Race/createRaceController'
import { getRacesController } from './controllers/Routes/Race/getRacesController'
import { createAccountController } from './controllers/Routes/Account/createAccountController';
import { getAccountController } from './controllers/Routes/Account/getAccountController';
import { getLoginController } from './controllers/Routes/Login/getLoginController'
import { getSingUpController } from './controllers/Routes/Signup/getSignUpController'
import cors from 'cors';

config()

const PORT = 5000;

mongoose.connect(
  process.env.MONGO_URL!
).then(() => {
  console.log("Succssefully connected to database")
  app.listen(PORT)
})
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", getRacesController)

app.post("/", createRaceContoller)

app.get("/account", getAccountController)

app.post("/account", createAccountController)

app.get("/login", getLoginController)

app.post("/login")

app.get("/signup", getSingUpController)

app.post("/signup")


