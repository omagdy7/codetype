import express from 'express'
import { Request, Response } from 'express';
import mongoose from 'mongoose'
import Account from './models/Account';
import { config } from "dotenv"
import { createRaceContoller } from './controllers/createRaceController'
import { getRacesController } from './controllers/getRacesController'
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

app.post("/account", async (req: Request, res: Response) => {
  const newAccount = new Account({
    username: req.body.username,
  })
  const createdAccount = await newAccount.save()
  res.json(createdAccount)
})


app.get("/", getRacesController)

app.post("/", createRaceContoller)


app.get("/", (_: Request, res: Response) => {
  res.send("I am a server")
})

app.get("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
  const userWithEmail = await (Account.findOne({ $where: email })).catch((err) => console.log("Error: ", err))

  if (!userWithEmail) {
    return res.status(400).json({ message: "Email or password doesn't match" })
  }

  if (userWithEmail.password !== password) {
    return res.status(400).json({ message: "Password doesn't match!" })
  }
})

/* app.listen(PORT) */
//password=WMvkA7W9m0ZstRg6


