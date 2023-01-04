import { Request, Response } from 'express';
import User from '../../../models/User';


export const getLoginController = async (req: Request, res: Response) => {

  const user : any = await User.findOne({
    email: "koala",
  })

  if (user) {
    res.send(user)
    /* if (user.account.password == req.body.password) { */
    /*   res.send(user) */
    /* } else { */
    /*   res.send(user) */
    /* } */
  } else {
    res.send("There is no email")
  }



}
