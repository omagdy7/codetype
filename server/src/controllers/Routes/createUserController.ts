import { Request, Response } from 'express';
import User from '../models/User';


export const createUserContoller = async (req: Request, res: Response) => {
  const newUser = new User({
    Account: req.body.Account,
    Settings: req.body.Settings,
    Stats: req.body.Stats,
    Races: [...req.body.Races],
  })
  const createdUser = await newUser.save()
  res.json(createdUser)
}
