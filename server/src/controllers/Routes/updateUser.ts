import User from "../../models/User";
import { Request, Response } from 'express';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const doc = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
}
