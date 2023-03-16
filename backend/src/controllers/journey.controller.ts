import { Get, Route, Tags } from "tsoa";
import { Journey } from "../models";
import { getJourneys } from "../repositories/journey";


@Route("journeys")
@Tags("Journey")
export default class JourneyController{
    @Get("/")
    public async getJourneys(): Promise<Array<Journey>> {
        return getJourneys();
    }
}