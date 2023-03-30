/* import * as JourneyRepository from "./journey.repository";
import {AppDataSource} from "../index";
import { generateJourneysData } from "../../test/utils/generate";



jest.mock("typeorm", () => {
    return {
        getRepository: jest.fn().mockReturnValue({
            find: () => {},
            findOne: () => {}
        }),
        PrimaryGeneratedColumn: () => {},
        PrimaryColumn: () => {},
        Column: () => {},
        Entity: () => {} 
}; 
})

const mockedGetRepo = jest.mocked(AppDataSource.getRepository(<jest.Mock>{}));
beforeEach(() => {
    mockedGetRepo.find.mockClear();
});

describe("JourneyRepository", () => {
    describe("getJourneys", () => {
        test("should return empty array", async () => {
            mockedGetRepo.find.mockResolvedValue([]);
            const journeys = await JourneyRepository.getJourneys(1, 50);
            expect(journeys).toEqual([]);
            expect(mockedGetRepo.find).toHaveBeenCalledWith();
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
        });

        test("should return journey list", async () => {
            const journeysData = generateJourneysData(2);
            mockedGetRepo.find.mockResolvedValue(journeysData);
            const journeys = await JourneyRepository.getJourneys(1, 50);
            expect(journeys).toEqual(journeysData);
            expect(mockedGetRepo.find).toHaveBeenCalledWith();
            expect(mockedGetRepo.find).toHaveBeenCalledTimes(1);
        })
    })
}) */