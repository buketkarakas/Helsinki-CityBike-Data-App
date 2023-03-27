import { faker } from '@faker-js/faker';

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

export function generateJourneysData(n: number = 1, overide = {}){
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generateJourneyData({ id: i, ...overide});
        }
    );
}