# solita-devacademy-2023-solution

This is a project for Solita Dev Academy Finland 2023. It is a web application for showing City Bike data. It shows journey and station data from the following datasets:

* https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
* https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
* https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv
* https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv

![MainPage](./img/MainPage.png)



[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?fontSize=15&lineCount=2&theme=github_dark&gap=5&line1=Express,Express.js,2b20fc;Node.js,Node.js,aeddd2;Jest,Jest,db1e1f;Docker,Docker,e425fc;&line2=TypeScript,TypeScript,268fd7;React,React,8373f3;Python,Python,bde24a;PostgreSQL,PostgreSQL,a4cfb6;)](https://github-readme-tech-stack.vercel.app/api/cards?fontSize=15&lineCount=2&theme=github_dark&gap=5&line1=Express,Express.js,2b20fc;Node.js,Node.js,aeddd2;Jest,Jest,db1e1f;Docker,Docker,e425fc;&line2=TypeScript,TypeScript,268fd7;React,React,8373f3;Python,Python,bde24a;PostgreSQL,PostgreSQL,a4cfb6;)

## The Architecture 

Here is a diagram for the application:

![Architecture](./img/Solita-Architecture.png)


## Prerequisites
- Docker (https://docs.docker.com/engine/install/) 
- Python3  (https://www.python.org)

## Setup
1. Clone the github repository to your computer.

2. Change directory into /backend/ in the project and run the following command:

```
docker-compose up -d
```

This will run the backend application and database in the background

3. Change the directory into /backend/db-ingestion and install dependencies

```
pip3 install -r requirements.txt
```

4. We're ready to run data ingestion now:

```
python3 importData.py
```

This might take some time so let's wait until the ingestion is done :) 

5. Let's change directory into /frontend/ and create our frontend container:

```
docker-compose up -d
```

This will run the frontend application in the background

The frontend will run in: http://localhost:3000

The backend API documentation can be reached from: http://localhost:8000/docs/#/

***Warning*** 
:warning: The postgresql database have credentials plain in the dockerfile. They should be called from environment variables and should not be used plain in production. This is just for example.


## Tests

There are 2 tests for backend controllers and they can be run by navigating into /backend/ folder and running the following command:

```
npm test
```


## To-Do List

### Data Import

- [x] Import data from the CSV files to local Postgres database
- [x] Validate data before importing
- [x] Don't import journeys that lasted for less than 10 sec.
- [x] Don't import journeys that covered distance shorter than 10 meters

### Journey List View

- [x] List journeys with pagination
- [x] For each journey show: departure and return stations, covered distance in kilometers and duration in minutes
- [x] Ordering per column (extra)
- [ ] Searching (extra)
- [ ] Filtering (extra)

### Station List 

- [x] List all the stations with pagination
- [ ] Searching (extra)

### Single Station View

- [x] Show: station name, station address, total number of journeys starting from the station, total number of journeys ending at the station
- [ ] Station location on map (extra)
- [x] Avg distance starting from and  ending at the station (extra)
- [x] Top 5 most popular stations for journeys starting from and ending at the station (extra)
- [ ] Ability to filter all the calc. per month (extra)

### Extras
- [ ] Dockerize-automate the data ingestion
- [ ] Make the repository unit tests work
- [ ] Implement E2E tests

