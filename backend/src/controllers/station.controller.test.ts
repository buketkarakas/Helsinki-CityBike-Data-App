import StationController from "./station.controller";
import * as StationRepository from "../repositories/station.repository";
import { generateStationsData, generateStationData, generateStationJourneyStatData } from "../../test/utils/generate";



afterEach(() => {
    jest.resetAllMocks();
});

describe("StationController", () => {
    describe("getStations", () => {
        test("should return empty array", async () => {
            const spy = jest
                .spyOn(StationRepository, "getStations")
                .mockResolvedValueOnce([]);

            const controller = new StationController();
            const journeys = await controller.getStations("1");
            expect(journeys).toEqual([]);
            expect(spy).toHaveBeenCalledWith(1, 50);
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

        test("should return station list", async () => {
            const stationList = generateStationsData(2);
            const spy = jest
                .spyOn(StationRepository, "getStations")
                .mockResolvedValueOnce(stationList);
            
            const controller = new StationController();
            const stations = await controller.getStations("1");
            expect(stations).toEqual(stationList);
            expect(spy).toHaveBeenCalledWith(1,50);
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });
    });

    describe("getStation", () =>{
        test("should return station from the database", async () => {
            const id = 1;
            const stationData = generateStationData({ id });
            const spy = jest
                .spyOn(StationRepository, "getStation")
                .mockResolvedValueOnce(stationData);
        
            const controller  = new StationController();
            const station = await controller.getStation(id.toString());
            expect(station).toEqual(stationData);
            expect(spy).toHaveBeenCalledWith(id);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("should return station stats from the database", async () => {
            const stationStatsData = generateStationJourneyStatData();
            const spy = jest
                .spyOn(StationRepository, "getStationJourneyStats")
                .mockResolvedValueOnce(stationStatsData);
            
            const controller = new StationController();
            const stationStats = await controller.getStationJourneyStats("1");
            expect(stationStats).toEqual(stationStatsData);
            expect(spy).toHaveBeenCalledWith(1);
            expect(spy).toHaveBeenCalledTimes(1);

        });
    });
});
