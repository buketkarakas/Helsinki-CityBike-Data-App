import { Get, Path, Route, Tags } from "tsoa";
import { Journey } from "../models";
import { getJourneys } from "../repositories/journey";

const PAGE_SIZE = 50;

@Route("journeys")
@Tags("Journey")
export default class JourneyController{
    @Get("/{page}")
    public async getJourneys(@Path() page: string): Promise<Array<Journey>> {

        return getJourneys(parseInt(page), PAGE_SIZE)
    }
}