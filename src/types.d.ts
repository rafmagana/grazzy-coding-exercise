interface HealthCheckResponse {
    uptime: number;
    message: 'Ok';
    date: Date;
}
interface SunsetResults { 
    sunrise: string;
    sunset: string;
    solar_noon: string;
    day_length: string;
    civil_twilight_begin: string;
    civil_twilight_end: string;
    nautical_twilight_begin: string;
    nautical_twilight_end: string;
    astronomical_twilight_begin: string;
    astronomical_twilight_end: string;

}

interface SunsetResponse {
    results: SunsetResults;
    status: string;
    tzid: string;
}

interface SunsetSuccess {
    sunset: string;
    status: 'SUCCESS'
}
interface SunsetError { 
    message: string;
    status: "OK" | "INVALID_REQUEST" | "INVALID_DATE" | "UNKNOWN_ERROR" | "INVALID_TZID"
}

interface ApiRequestParams {
    firstTimestamp: string;
    secondTimestamp: string;
    timezone: string;
}

interface ISunsetData {
    firstTimestamp: string,
    secondTimestamp: string,
    timezone: string
    sunset: string;
}