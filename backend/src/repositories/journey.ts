import { Journey } from "../models";
import { AppDataSource } from "..";


export const getJourneys = async (page: number, limit: number): Promise<Array<Journey>> => {
    const offset = (page - 1) * limit;

    return await AppDataSource.createQueryBuilder()
    .select("journey")
    .from(Journey, "journey")
    .offset(offset)
    .limit(limit)
    .getMany()

};
