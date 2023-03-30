import JourneyController from "./journey.controller";
import * as JourneyRepository from "../repositories/journey.repository";
import { generateJourneysData } from "../../test/utils/generate";


afterEach(() => {
    jest.resetAllMocks();
});

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
        });

        test("should return journey list", async () => {
            const journeyList = generateJourneysData(2);
            const spy = jest
                .spyOn(JourneyRepository, "getJourneys")
                .mockResolvedValueOnce(journeyList);
            
            const controller = new JourneyController();
            const journeys = await controller.getJourneys("1");
            expect(journeys).toEqual(journeyList);
            expect(spy).toHaveBeenCalledWith(1, 50);
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });
    });
});