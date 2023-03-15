import { Journey } from "../models";
import { AppDataSource } from "..";



export const getJourneys = async (): Promise<Array<Journey>> => {
    const journeyRepository = AppDataSource.getRepository(Journey)
    return journeyRepository.find()
}
