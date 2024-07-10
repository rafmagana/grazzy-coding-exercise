import { Router, Request, Response } from "express";
import getSunset from "../utils/sunrise-sunset.js"
import moment, { Moment } from "moment-timezone";
import authMiddleware from "../middleware/auth.js";
import { Collection, Document } from "mongodb";

export default (sunsetDatasDbCollection: Collection<Document>) => {
    const isSameCalendarDateHandler = Router();

    isSameCalendarDateHandler.post("/is-same-calendar-day", authMiddleware, async (req:Request, res: Response) => {
        const dateFormat: string = "YYYY-MM-DD"
        const reqParams: ApiRequestParams = req.body
        const firstDate: Date = new Date(reqParams.firstTimestamp)
        const secondDate: Date = new Date(reqParams.secondTimestamp)
        const firstDateInTimezone: Moment = moment.tz(firstDate, "UTC").tz(reqParams.timezone)
        const firstDateDay: string = firstDateInTimezone.format(dateFormat)
        const secondDateInTimezone: Moment = moment.tz(secondDate, "UTC").tz(reqParams.timezone)
        const secondDateDay = secondDateInTimezone.format(dateFormat)
        const sameDay: boolean = firstDateDay === secondDateDay

        if(sameDay) {
            const getSunsetData:SunsetError | SunsetSuccess = await getSunset(firstDateDay, reqParams.timezone)
            if(getSunsetData.status == 'SUCCESS') {
                const result = await sunsetDatasDbCollection.insertOne({
                    firstTimestamp: firstDateInTimezone.format(),
                    secondTimestamp: secondDateInTimezone.format(),
                    timezone: reqParams.timezone,
                    sunset: getSunsetData.sunset
                })

                console.log(result)
            }
        }
        const status = sameDay ? 200 : 422
        res.status(status).send()
    })

    return isSameCalendarDateHandler
}