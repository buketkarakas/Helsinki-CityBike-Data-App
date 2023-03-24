import { AppDataSource } from "..";
import { Journey, Station } from "../models";



export const getStations = async (page: number, limit:number): Promise<Array<Station>> => {
    const skip = (page) * limit;

    return await AppDataSource.createQueryBuilder()
    .select("station")
    .from(Station, "station")
    .skip(skip)
    .take(limit)
    .getMany()
};

export const getStation = async (stationId: number): Promise<Station | null> => {
    const stationRepository = AppDataSource.getRepository(Station);
    const station = await stationRepository.findOne({
        where: {
            stationid: stationId
        }
    });
    if (!Station) return null;
    return station;
};

export const getStationJourneyStats = async (stationId: number): Promise<any | null> => {
    const journeyRepository = AppDataSource.getRepository(Journey);
    const startingJourneysCount = await journeyRepository.createQueryBuilder('journey')
                                        .where('departurestationid = :id', {id: stationId})
                                        .getCount();
    
    const endingJourneysCount = await journeyRepository.createQueryBuilder('journey')
                                        .where('returnstationid = :id', {id: stationId})
                                        .getCount();
    
    const averageDistance = await journeyRepository.createQueryBuilder('journey')
                                    .select('AVG(covereddistance)')
                                    .where('departurestationid = :id AND returnstationid = :id', {id: stationId})
                                    .getRawOne()
    
    const result = {
        startingJourneysCount: startingJourneysCount,
        endingJourneysCount: endingJourneysCount,
        averageDistance: averageDistance.avg
    }

    return result;
}

