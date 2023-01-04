import { Request, Response } from 'express';
import Race from '../../../models/Race'

export const createRaceContoller = async (req: Request, res: Response) => {
  const newRace = new Race({
    lines: [...req.body.lines],
    cur_line_idx: req.body.cur_line_idx
  })
  const createdRace = await newRace.save()
  res.json(createdRace)
}
