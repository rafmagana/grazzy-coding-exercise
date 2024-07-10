import { Router, Request, Response } from 'express';

export default () => {
  const healthCheckHandler: Router = Router();

  healthCheckHandler.get("/healthcheck", async (_req:Request, res: Response) => {
      const response: HealthCheckResponse = {
          uptime: process.uptime(),
          message: 'Ok',
          date: new Date()
        }
      res.status(200).send(response)
  })

  return healthCheckHandler
}