import { faker } from "@faker-js/faker";

export function generateJourneyData(overide = {}) {
    return {
        id: faker.datatype.number(),
        departuretime: new Date(),
        returntime: new Date(),
        departurestationid: faker.datatype.number(),
        returnstationid: faker.datatype.number(),
        departurestationname: faker.word.noun(),
        returnstationname: faker.word.noun(),
        covereddistance: faker.datatype.float(),
        duration: faker.datatype.float(),
        ...overide
    };
}

export function generateJourneysData(n = 1, overide = {}){
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generateJourneyData({ id: i, ...overide});
        }
    );
}

export function generateStationData(overide = {}) {
    return {
        "stationid": faker.datatype.number(),
        "finnishname": faker.word.noun(),
        "swedishname": faker.word.noun(),
        "englishname": faker.word.noun(),
        "finnishaddress": faker.word.noun(),
        "swedishaddress": faker.word.noun(),
        "finnishcity": faker.address.cityName(),
        "swedishcity": faker.address.cityName(),
        "operator": faker.word.noun(),
        "capacity": faker.random.numeric(),
        "xcoord": faker.datatype.float(),
        "ycoord": faker.datatype.float()
    };
}

export function generateStationsData(n = 1, overide = {}){
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generateStationData({id: i, ...overide});
        }
    );
}

export function generateStationJourneyStatData(overide = {}){
    return {
        "startingJourneysCount": faker.datatype.number(),
        "endingJourneysCount": faker.datatype.number(),
        "averageDistance": faker.datatype.float(),
        "topDepartureStations": [
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
        ],
        "topReturnStations": [
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
            {
                "count": faker.datatype.number(),
                "finnishname": faker.word.noun(),
                "departurestationid": faker.datatype.number()
            },
        ],
        ...overide 
    };
}