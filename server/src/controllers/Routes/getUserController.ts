import { Request, Response } from 'express';
import User from '../../models/User';

export const getUserController = async (_: Request, res: Response) => {
  const user = await User.find()
  res.json(user)
}
