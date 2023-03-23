import { AppDataSource } from "..";
import { Station } from "../models";



export const getStations = async (page: number, limit:number): Promise<Array<Station>> => {
    const skip = (page - 1) * limit;

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