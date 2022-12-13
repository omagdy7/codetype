import { Request, Response } from 'express';
import Race from '../models/Race'

export const getRacesController = async (_: Request, res: Response) => {
  const races = await Race.find()
  res.json(races)
}
