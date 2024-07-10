import express, { Application, Request, Response } from "express";
import cors from "cors";
import rootHandler  from "./routes/root.route.js";
import healthCheckHandler from "./routes/healthcheck.route.js";
import sunsetDataHandler from "./routes/sunsetData.route.js";
import isSameCalendarDateHandler from "./routes/isSameCalendarDay.route.js";
import { Collection, Document } from "mongodb";

export default (sunsetDatasDbCollection: Collection<Document>) => {
    const app: Application = express()

    app.use(cors({
        origin: ["*"],
        credentials: true
    }))

    app.use(express.json())

    app.use(rootHandler())
    app.use(healthCheckHandler())
    app.use(sunsetDataHandler(sunsetDatasDbCollection));
    app.use(isSameCalendarDateHandler(sunsetDatasDbCollection))

    return app
}