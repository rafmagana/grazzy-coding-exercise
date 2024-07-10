# Grazzy coding exercise

An API to know if two dates occur in the same calendar day within a time zone.

## Setup

### Requirements

You need to install Docker.

#### Enviroment variables

Create an .env file and the the following variables:

```
PORT=value-here
API_KEY=value-here
SUNRISE_LATITUDE=value-here
SUNRISE_LONGITUDE=value-here
```

### Start the containers

You'll just have to issue the following commands:

```
$ docker-compose build
$ docker compose up
```

## Access the API

The server responds on port 3000, so to hit the API send a request to the following URL:

```
http://localhost:3000
```

## Authorization

You'll need to send requests with an `AUTHORIZATION` header and the value must be the value of the `API_KEY` env var.

## Available endpoints

* `GET /healthcheck` (returns information about the service)
* `POST /is-same-calendar-day` (returns 200 if both dates are in the same calendar day depending on the timezone)
* * Body must have 
* * * `firstTimestamp`
* * * `secondTimestamp`
* * * `timezone`
* `GET /sunset-data` (returns the stored sunset data. We store these values only of calls to `POST /is-same-calendar-day` returns `200`)

## Testing

Just run `npm test`. Tests doesn't use Docker.