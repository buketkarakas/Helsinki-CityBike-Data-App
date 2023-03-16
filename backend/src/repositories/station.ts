import { AppDataSource } from "..";
import { Station } from "../models";



export const getStations = async (): Promise<Array<Station>> => {
    const stationRepository = AppDataSource.getRepository(Station);
    return stationRepository.find();
};

export const getStation = async (stationId: number): Promise<Station | null> => {
    const stationRepository = AppDataSource.getRepository(Station);
    const station = await stationRepository.findOne({
        where: {
            stationId: stationId
        }
    });
    if (!Station) return null;
    return station;
};