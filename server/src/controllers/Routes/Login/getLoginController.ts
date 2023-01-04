import { Request, Response } from 'express';


export const getLoginController = async (req: Request, res: Response) => {
  res.send("Hello from login route")
}
