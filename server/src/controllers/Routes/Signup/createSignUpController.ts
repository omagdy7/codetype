import { Request, Response } from 'express';
import User from '../../../models/User';

  /* username: String, */
  /* Account: { type: Schema.Types.ObjectId, ref: 'Account'}, */
  /* Settings: { type: Schema.Types.ObjectId, ref: 'Settings'}, */
  /* Stats: { type: Schema.Types.ObjectId, ref: 'Stats'}, */
  /* Races: [{ type: Schema.Types.ObjectId, ref: 'Race'}], */

export const createSignUpController = async (req: Request, res: Response) => {

  try {
    const account = {
      email: req.body.email,
      password: req.body.password
    }
    const settings = {
        theme: "dark",
        difficulty: "easy",
    } 
    const stats = {
        testsTaken: 0,
        testsCompleted: 0,
        averageWpm: 0,
        highestScore: 0,
    }

    const newUser = new User({
      username: req.body.username,
      account: account,
      Settings: settings,
      Stats: stats,
    })

    const createdUser = await newUser.save()
    res.status(201).json(createdUser)
  } 
  catch(err) {
    console.log(err)
    res.status(400).send('error, user not created');

  }
}
