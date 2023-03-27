import { Journey } from "../models";
import { AppDataSource } from "..";


export const getJourneys = async (page: number, limit: number): Promise<Array<Journey>> => {
    const skip = (page) * limit;

    return await AppDataSource.createQueryBuilder()
    .select("journey")
    .from(Journey, "journey")
    .skip(skip)
    .take(limit)
    .getMany()

};
