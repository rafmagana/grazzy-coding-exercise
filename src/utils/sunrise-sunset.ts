export default async (date: string, timezone: string) => {
    const latitude = parseFloat(process.env.SUNRISE_LATITUDE)
    const longitude = parseFloat(process.env.SUNRISE_LONGITUDE)
    const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=2024-07-01&tzid=${timezone}`)
    const data: SunsetResponse = await response.json()

    if(response.ok) {
        const result: SunsetSuccess = {
            sunset: data.results.sunrise,
            status: 'SUCCESS'
        }
        return result
    } else {
        const error: SunsetError = {
            message: "Couldn't get sunset data",
            status: data.status
        } as SunsetError
        return error
    }
}