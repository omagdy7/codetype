import { Request, Response } from 'express';


export const getSingUpController = async (req: Request, res: Response) => {
  res.send("Hello from signup route")
}
