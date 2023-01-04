import { Request, Response } from 'express';


export const getAccountController = async (req: Request, res: Response) => {
  res.send("Hello from account route")
}
