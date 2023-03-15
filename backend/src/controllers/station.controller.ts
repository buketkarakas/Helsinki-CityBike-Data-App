import { Get, Path, Route, Tags } from "tsoa";
import { Station } from "../models";
import { getStations, getStation } from "../repositories/station";



@Route("stations")
@Tags("Station")
export default class StationController {
    @Get("/")
    public async getStations(): Promise<Array<Station>> {
        return getStations();
    }

    @Get("/:stationId")
    public async getStation(@Path() stationId: string): Promise<Station | null> {
        return getStation(Number(stationId));
    }
}