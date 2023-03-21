
CREATE TABLE journey(
    id INT PRIMARY KEY,
    departureTime timestamptz,
    returnTime timestamptz,
    departureStationId INT,
    returnStationId INT,
    departureStationName TEXT,
    returnStationName TEXT,
    coveredDistance decimal,
    duration decimal
);

CREATE TABLE station(
    stationId INT PRIMARY KEY,
    finnishName text,
    swedishName text,
    englishName text,
    finnishAddress text,
    swedishAddress text,
    finnishCity text,
    swedishcity text,
    operator text,
    capacity text,
    xCoord decimal,
    yCoord decimal
);