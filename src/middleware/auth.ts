import { Request, Response, NextFunction } from 'express';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const apiKey: string = req.get("authorization")
    if(apiKey !== undefined && apiKey === process.env.API_KEY) {
        next()
    } else {
        return res.status(403).json({ error: "Bad credentials!"})
    }
}