import { Router, Request, Response } from "express";
import authMiddleware from "../middleware/auth.js";
import { Collection, Document } from "mongodb";

export default (sunsetDatasDbCollection: Collection<Document>) => {
    const sunsetDataHandler: Router = Router();

    sunsetDataHandler.get("/sunset-data", authMiddleware, async (req:Request, res:Response) => {
        try {
            console.log(sunsetDatasDbCollection)
            const result = await sunsetDatasDbCollection.find({}).toArray()
            res.send(result)
        } catch(error: any) {
            console.log("Error on /sunset-data", error)
            res.status(500).send({
                error
            })
        }
    })

    return sunsetDataHandler
}
