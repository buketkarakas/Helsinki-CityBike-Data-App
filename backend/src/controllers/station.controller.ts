import { Get, Path, Route, Tags } from "tsoa";
import { Station } from "../models";
import { getStations, getStation, getStationJourneyStats } from "../repositories/station.repository";

const PAGE_SIZE = 50;


@Route("stations")
@Tags("Station")
export default class StationController {
    @Get("/paging/{page}")
    public async getStations(@Path() page: string): Promise<Array<Station>> {
        return getStations(parseInt(page), PAGE_SIZE);
    }

    @Get("/:stationId")
    public async getStation(@Path() stationId: string): Promise<Station | null> {
        return getStation(Number(stationId));
    }

    @Get("/:stationId/journeys")
    public async getStationJourneyStats(@Path() stationId: string): Promise<any | null> {
        return getStationJourneyStats(Number(stationId));
    }
}