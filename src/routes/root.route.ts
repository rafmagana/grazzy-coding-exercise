import { Router, Request, Response } from 'express';

export default () => {
    const rootHandler: Router = Router();

    rootHandler.get("/", async (req:Request, res:Response) => {
        res.status(200).send("Grazzy API")
    })

    return rootHandler
}