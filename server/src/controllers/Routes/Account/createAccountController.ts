import { Request, Response } from 'express';


export const createAccountController = async (req: Request, res: Response) => {
  res.send("Hello from account route")
}
