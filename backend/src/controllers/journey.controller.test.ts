import JourneyController from "./journey.controller";
import * as JourneyRepository from "../repositories/journey.repository"

describe("JourneyController", () => {
    describe("getJourneys", () => {
        test("should return empty array", async () => {
            const spy = jest
                .spyOn(JourneyRepository, "getJourneys")
                .mockResolvedValueOnce([]);

            const controller = new JourneyController();
            const journeys = await controller.getJourneys("1");
            expect(journeys).toEqual([]);
            expect(spy).toHaveBeenCalledWith(1, 50);
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        })

        test("should return journey list", async () => {
            const journeyList = [
                {
                    id: 1,
                    departuretime: new Date(),
                    returntime: new Date(),
                    departurestationid: 1,
                    returnstationid: 2,
                    departurestationname: "test1",
                    returnstationname: "test2",
                    covereddistance: 10,
                    duration: 5
                }
            ];
            const spy = jest
                .spyOn(JourneyRepository, "getJourneys")
                .mockResolvedValueOnce(journeyList);
            
            const controller = new JourneyController();
            const journeys = await controller.getJourneys("1");
            expect(journeys).toEqual(journeyList);
            expect(spy).toHaveBeenCalledWith(1, 50);
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        })
    })
})